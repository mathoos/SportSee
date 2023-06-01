function Bloc({ icon, title, subtitle, backgroundColor }) {

    return (
      <div className="resume_bloc">
        <figure className={`resume_bloc-icon ${backgroundColor}`}>
            <img src={icon} alt={subtitle} />
        </figure>
        <div className="resume_bloc-txt">
            <p className="resume_bloc-txt--title">{title}</p>
            <p className="resume_bloc-txt--subtitle">{subtitle}</p>
        </div>
      </div>
    );
}

export default Bloc