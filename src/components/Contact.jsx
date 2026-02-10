export default function Contact() {
  return (
    <section id="contact" className="py-14">
      <h2 className="text-2xl font-semibold">Contact</h2>

      <div className="mt-4 space-y-2 text-slate-300">
        <p>
          Email:{" "}
          <a className="text-indigo-400 hover:underline" href="mailto:you@example.com">
            you@example.com
          </a>
        </p>

        <p>
          LinkedIn:{" "}
          <a
            className="text-indigo-400 hover:underline"
            href="https://www.linkedin.com/in/yourname/"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/yourname
          </a>
        </p>
      </div>
    </section>
  );
}
