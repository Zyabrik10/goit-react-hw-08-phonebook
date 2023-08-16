const ErrorComponentSytles = {
  margin: '0 auto',
  textAlign: 'center',
};

export function ErrorComponent({ errorMessage }) {
  return (
    <div style={ErrorComponentSytles}>
      <p className="global-p">{errorMessage}</p>
    </div>
  );
}
