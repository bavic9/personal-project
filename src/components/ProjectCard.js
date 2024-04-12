

export const ProjectCard = ({ title, imgUrl, icon, content }) => {
  return (
    <div className='col col-12 col-sm-6 col-md-4'>
      <div className="proj-imgbx">
        <img className="imgcard" src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{icon}</span>
          <p>{content}</p>
        </div>
      </div>
    </div>
  )
}