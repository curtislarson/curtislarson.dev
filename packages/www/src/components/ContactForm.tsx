import { Component } from "preact";
import { JSX } from "preact/jsx-runtime";
import { ApiResponseJson, ContactData, validateContactData } from "@curtis.land/common";
import ErrorLabel from "./ErrorLabel.tsx";
import { api } from "../api.ts";

export interface ContactFormState extends ContactData {
  errors: Partial<Record<keyof ContactData, string>>;
  sent?: boolean;
  sending: boolean;
}

export interface ContactFormProps {
  contactId: string;
  initialSubject?: string;
  onCloseClicked?: () => void;
}

export default class ContactForm extends Component<ContactFormProps, ContactFormState> {
  constructor(props: ContactFormProps) {
    super(props);
    this.state = {
      contactId: props.contactId,
      email: "",
      message: "",
      subject: props.initialSubject ?? "",
      errors: {},
      sending: false,
    };
  }

  override componentWillReceiveProps(nextProps: Readonly<ContactFormProps>) {
    if (nextProps.contactId && this.props.contactId !== nextProps.contactId) {
      this.setState({ contactId: nextProps.contactId });
    }
    if (nextProps.initialSubject && this.props.initialSubject !== nextProps.initialSubject) {
      this.setState({ subject: nextProps.initialSubject });
    }
  }

  onSubmit = async (e: JSX.TargetedEvent<HTMLFormElement, Event>) => {
    e.preventDefault();

    const validateRes = validateContactData(this.state);

    if (validateRes.ok) {
      this.setState({ sending: true });
      const res = await api
        .fetch("/contact", {
          method: "POST",
          body: JSON.stringify({
            email: this.state.email,
            message: this.state.message,
            subject: this.state.subject,
            contactId: this.state.contactId,
          }),
        })
        .then((r) => r.json<ApiResponseJson<ContactData>>());

      if (!res.ok) {
        this.setState({ errors: res.errors, sending: false });
      } else {
        this.setState({ sent: true, sending: false, email: "", message: "", subject: "" });
      }
    } else {
      this.setState({ errors: validateRes.errors });
    }
  };

  onCloseClicked = (e: JSX.TargetedMouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (this.props.onCloseClicked) {
      this.props.onCloseClicked();
    }
    this.setState({ errors: {}, sending: false, sent: false, email: "", message: "", subject: "" });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        {this.state.sent === true ? this.renderSentDisplay() : this.renderFormControls()}
      </form>
    );
  }

  renderFormControls() {
    return (
      <>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Email Address</span>
          </label>
          <input
            name="email"
            type="email"
            placeholder="hello@example.com"
            class={`input input-bordered ${this.state.errors["email"] ? "input-error" : ""}`}
            value={this.state.email}
            onInput={(e) => this.setState({ email: (e.target as HTMLInputElement).value, errors: {} })}
          />
          <ErrorLabel message={this.state.errors["email"]} />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Subject</span>
          </label>
          <input
            name="subject"
            type="text"
            placeholder="Subject"
            class={`input input-bordered ${this.state.errors["subject"] ? "input-error" : ""}`}
            value={this.state.subject}
            onInput={(e) => this.setState({ subject: (e.target as HTMLInputElement).value, errors: {} })}
          />
          <ErrorLabel message={this.state.errors["email"]} />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Message</span>
          </label>
          <textarea
            name="message"
            placeholder="Message..."
            rows={6}
            class={`textarea textarea-bordered ${this.state.errors["message"] ? "textarea-error" : ""}`}
            value={this.state.message}
            onInput={(e) => this.setState({ message: (e.target as HTMLTextAreaElement).value, errors: {} })}
          />
          <ErrorLabel message={this.state.errors["message"]} />
        </div>
        <div class="form-control mt-6">
          <div class="flex">
            <button class={`mr-12 flex-1 btn btn-error`} onClick={this.onCloseClicked}>
              Close
            </button>
            <button type="submit" class={`flex-1 btn btn-primary ${this.state.sending ? "btn-disabled" : ""}`}>
              {this.state.sending ? "Sending..." : "Send"}
            </button>
          </div>
        </div>
      </>
    );
  }

  renderSentDisplay() {
    if (this.state.sent !== true) {
      return <div></div>;
    }

    return (
      <div class="flex flex-col">
        <h1 class="text-lg mb-4">Your message has been submitted!</h1>
        <button class={`mr-12 flex-1 btn btn-error w-full`} onClick={this.onCloseClicked}>
          Close
        </button>
      </div>
    );
  }
}
