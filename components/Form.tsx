
const Form = ({type,
post,
setPost,
submitting,
handleSubmit}:FormProps) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="mt-5 text-5xl font-extrabold leading-[1.15] text-black sm:text-6xl text-left">
        {type}{" "}
        <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
          Post
        </span>
      </h1>

      <p className="mt-5 text-lg text-gray-600 sm:text-xl max-w-md text-left">
        {type} and share exceptional prompts and unleash your creativity with an
        AI-powered platform.
      </p>

      <form onSubmit={handleSubmit} className="mt-10 w-full max-"></form>
    </section>
  );
}

export default Form