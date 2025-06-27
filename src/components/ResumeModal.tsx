const ResumeModal = ({
  filename,
  content,
  onClose,
}: {
  filename: string;
  content: string;
  onClose: () => void;
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full relative">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-red-600"
          onClick={onClose}
        >
          ✖
        </button>
        <h3 className="text-xl font-semibold mb-4 text-gray-800">Resume Preview: {filename}</h3>
        <pre className="whitespace-pre-wrap text-sm text-gray-700 max-h-[500px] overflow-y-auto">{content}</pre>
      </div>
    </div>
  );
};

export default ResumeModal;
