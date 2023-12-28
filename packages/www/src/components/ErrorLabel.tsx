export default function ErrorLabel({ message }: { message?: string }) {
  if (!message) {
    return <></>;
  }

  return (
    <label class="label">
      <span class="alert alert-error label-text-alt">{message}</span>
    </label>
  );
}
