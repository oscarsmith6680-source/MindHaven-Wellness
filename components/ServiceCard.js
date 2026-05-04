// MindPureWellness - Premium ServiceCard Component
const ServiceCard = ({ image, title, description, icon }) => {
  return (
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden" style={{ transition: 'var(--transition)', cursor: 'pointer' }}>
        <div className="position-relative">
          <img 
            src={image} 
            className="card-img-top" 
            alt={title} 
            style={{ height: '240px', objectFit: 'cover' }}
          />
          <div className="position-absolute top-0 end-0 p-3">
             <div className="bg-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                <i className={`bi ${icon} text-primary fs-5`}></i>
             </div>
          </div>
        </div>

        <div className="card-body p-4 text-center">
          <h4 className="card-title h5 fw-bold mb-3" style={{ fontFamily: 'Playfair Display' }}>{title}</h4>
          <p className="card-text text-muted small mb-0">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
