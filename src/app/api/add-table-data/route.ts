// app/api/updateUser.ts

import { PrismaClient } from '@prisma/client';
import { writeFile } from "fs/promises";
import path from "path";

const prisma = new PrismaClient();

export async function POST(request: Request) {

    const formData = await request.formData();

    const id = Number(formData.get('id'));
    const tableName = String(formData.get('tableName'));
    const name = String(formData.get('name'));
    const title = String(formData.get('title'));
    const flag = String(formData.get('flag'));
    let photo = String(formData.get("photo")); // Default photo value
    const photoFile = formData.get("photo") as File;

  try {
    if (photoFile) {
      // Assuming you have a directory to store uploaded photos
      const photoDirectory = path.join(process.cwd(), "public", "uploads");
      const photoPath = path.join(photoDirectory, photoFile.name);
  
      // Convert ArrayBuffer to Buffer
      const buffer = Buffer.from(await photoFile.arrayBuffer());
  
      // Save the photo file to the server
      await writeFile(photoPath, buffer);
  
      // Set the photo field to the relative path (or full URL) where it's saved
      photo = `/uploads/${photoFile.name}`; // Adjust this based on your actual storage and URL structure
    }

    const updatedData = await prisma.tableData.create({
      data: {
        tableName,
        name,
        title,
        photo,
        flag,
      },
    });

    return new Response(JSON.stringify({updatedData}));
  } catch (error) {
    console.error('Error updating data:', error);
    return new Response(JSON.stringify({error: error}));
  } finally {
    await prisma.$disconnect();
  }
}
