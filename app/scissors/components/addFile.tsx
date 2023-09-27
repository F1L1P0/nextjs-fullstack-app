import fs from 'fs';
import { join } from 'path';

export default function ServerUploadPage() {
  async function upload(data: FormData) {
    'use server';

    const file: File | null = data.get('file') as unknown as File;
    if (!file) {
      throw new Error('No file uploaded');
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // With the file data in the buffer, you can do whatever you want with it.
    // For this, we'll write it to the filesystem in a new location within the public directory
    const path = join(process.cwd(), 'public', file.name);
    fs.writeFileSync(path, buffer);
    console.log(`Open ${path} to see the uploaded file`);

    return { success: true };
  }

  return (
    <main>
      <h1>React Server Component: Upload</h1>
      <form action={upload}>
        <input type="file" name="file" />
        <button type="submit">ADD</button>
      </form>
    </main>
  );
}