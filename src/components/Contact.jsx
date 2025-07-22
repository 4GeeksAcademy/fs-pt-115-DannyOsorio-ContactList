export const Contact = ({image, name, address, phone, email}) => {

    return (
        <div className="card mb-3 text-center w-75 mx-auto">
            <div className="row">
                <div className="col-md-3">
                    <img src={image} className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-7 text-start">
                    <div className="card-body">
                        <h4 className="card-title">{name}</h4>
                        <h6 className="card-text"><i className="fa-solid fa-phone"></i>{phone}</h6>
                        <h6 className="card-text"><i className="fa-solid fa-location-dot"></i>{address}</h6>
                        <h6 className="card-text"><i className="fa-solid fa-envelope"></i>{email}</h6>
                    </div>
                </div>
                <div className="col-md-2 text-center d-inline-flex flex-wrap justify-content-center">
                    <button id="edit" className="btn"><i class="fa-solid fa-pen"></i></button>
                    <button id="delete" className="btn"><i class="fa-solid fa-trash-can"></i></button>
                </div>
            </div>
        </div>
    );
}