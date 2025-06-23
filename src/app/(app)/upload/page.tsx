// src/app/upload/page.tsx

import UploadForm from "@/components/UploadForm";


export const metadata = {
  title: 'Upload Resumes',
};

export default function UploadPage() {
  return (
    <div>
      <UploadForm />
    </div>
  );
}