// src/app/query/page.tsx
import QueryForm from '@/components/QueryForm';

export const metadata = {
  title: 'Query Resumes',
};

export default function QueryPage() {
  return (
    <div>
      <QueryForm />
    </div>
  );
}