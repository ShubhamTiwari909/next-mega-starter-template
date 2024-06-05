import Form from "./components/Form";

const ReactHookForm = () => {
  return (
    <div className="bg-slate-200 min-h-[calc(100vh-64px)] p-8">
      <h1 className="text-2xl md:text-5xl font-sans font-bold text-center mb-10">React Hook Form &amp; Zod</h1>
      <p className="text-lg md:text-2xl font-sans font-medium text-center mb-4 text-slate-500">
        React hook form is a Performant, flexible and extensible form library with easy-to-use validation.{" "}
        <a
          href="https://react-hook-form.com/get-started"
          target="_blank"
          rel="noreferrer noopener"
          className="no-underline text-blue-600"
        >
          Documentation
        </a>
      </p>

      <p className="text-lg md:text-2xl font-sans font-medium text-center mb-16 text-slate-500">
        Zod is a TypeScript-first schema declaration and validation library.{" "}
        <a
          href="https://zod.dev/"
          target="_blank"
          rel="noreferrer noopener"
          className="no-underline text-blue-600"
        >
          Documentation
        </a>
      </p>

      {/* React Hook Form Example */}
      <Form />
    </div>
  );
};

export default ReactHookForm;
