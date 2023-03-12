const Card = () => {
  return (
    <div className="card-container">
      <img
        className="card-image"
        src="https://images.pexels.com/photos/131723/pexels-photo-131723.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="photoo"
      />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "15px",
        }}
      >
        <div className="card-sub-box">
          <span>Tema jaloby budet / Plohoe obslujivanie</span>
          <span>Na kogo ili na chto / Bank</span>
          <span>Ot kogo tipo / Anonimno</span>
          <span>Vrema jaloby / 18:00</span>
        </div>

        <div>
          <span
            style={{
              color: "darkblue",
            }}
          >
            laiki 78
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
