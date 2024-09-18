function Alert(props) {
    return (
        props.message && <div>
        <div className="alert alert-warning d-flex align-items-center" role="alert">
          <svg className="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:">
            <use href="#check-circle-fill" />
          </svg>
          <div>
            {props.message}
          </div>
        </div>
      </div>
    )
}

export default Alert
