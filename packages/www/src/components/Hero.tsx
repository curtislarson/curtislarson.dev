import { createRef } from "preact";
import { useCallback } from "preact/hooks";
import ContactForm from "./ContactForm";

export default function Hero() {
  const contactModal = createRef<HTMLDialogElement>();

  const onContactClicked = useCallback(() => {
    if (contactModal.current) {
      contactModal.current.showModal();
    }
  }, [contactModal]);

  const onContactModalCloseClicked = useCallback(() => {
    if (contactModal.current) {
      contactModal.current.close();
    }
  }, []);

  return (
    <div class="hero min-h-[70vh]">
      <div class="items-center justify-center max-w-full gap-4 p-4 flex flex-col text-center">
        <h1 class="sm:text-7xl text-5xl font-bold">Curtis Larson</h1>
        <h2 class="text-lg sm:text-2xl mt-2 font-light">Full Stack Software Developer</h2>
        <h3 class="text-sm sm:text-lg mt-2 font-light">Currently available for remote freelance / contract jobs.<br/>Please view my resume below and feel free to contact me with any questions.</h3>
        <div class="flex flex-row">
          <p class="text-primary py-2 px-2">
            <a alt="Contact" class="btn btn-primary" href="mailto:curtismlarson@gmail.com">
              Contact
            </a>
          </p>
          <p class="text-primary py-2 px-2">
            <a href="/resume.pdf" alt="Resume" class="btn btn-primary">
              Resume
            </a>
          </p>
          <p class="text-primary py-2 px-2">
            <a
              href="https://github.com/curtislarson"
              rel="noopener noreferrer nofollow"
              target="_blank"
              alt="Github"
              class="btn btn-primary"
            >
              Github
            </a>
          </p>
        </div>
        <div class="divider"></div>
        <div class="flex flex-row">
          <p class="text-primary py-2 px-2">
            <a href="https://quack.software" alt="QuackWare" class="text-info underline">
              QuackWare - Software & DevOps Consulting
            </a>
          </p>
        </div>
      </div>
      <dialog id="contactModal" class="modal" ref={contactModal}>
        <div class="modal-box">
          <h3 class="font-bold text-lg">Contact Form</h3>
          <ContactForm contactId="homepage_contact" onCloseClicked={onContactModalCloseClicked} />
        </div>
      </dialog>
    </div>
  );
}
