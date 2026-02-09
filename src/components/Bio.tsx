import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython, faJs, faReact } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';

const ICON_MAP: Record<string, any> = {
  React: faReact,
  JavaScript: faJs,
  TypeScript: faCode,
  Python: faPython,
  'C#': faCode,
};

export default function Bio() {
  return (
    <section
      id="bio"
      className="mx-auto max-w-5xl px-6 py-24"
      aria-labelledby="bio-heading"
    >
      <h2
        id="bio-heading"
        className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
      >
        About Me
      </h2>

      <div className="mt-8 grid gap-10 md:grid-cols-3">
        {/* TODO: Replace with your profile image */}
        <div className="flex items-center justify-center">
          <div className="flex h-48 w-48 items-center justify-center rounded-full bg-gray-200 text-gray-400 dark:bg-gray-800 dark:text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-20 w-20"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M5.121 17.804A9 9 0 0112 15a9 9 0 016.879 2.804M15 10a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
        </div>

        <div className="md:col-span-2">
          {/* TODO: Add your name */}
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Ben Hockley
          </h3>

          {/* TODO: Add your job title or tagline */}
          <p className="mt-1 text-gray-500 dark:text-gray-400">
            Software Engineer
          </p>

          {/* TODO: Write a short bio about yourself */}
          <p className="mt-4 leading-relaxed text-gray-600 dark:text-gray-300">
            My name is Ben Hockley, I am a software engineer studying Applied Software Engineering at Cardiff University.
          </p>

          {/* TODO: Add your skills or technologies */}
          <div className="mt-6">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
              Skills &amp; Technologies
            </h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {["React", "JavaScript", "TypeScript", "Python", "C#"].map(
                (skill) => (
                  <span
                    key={skill}
                    className="flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                  >
                    <FontAwesomeIcon
                      icon={ICON_MAP[skill] || faCode}
                      className="inline-block text-current"
                      style={{ width: '0.9em' }}
                    />
                    <span>{skill}</span>
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
