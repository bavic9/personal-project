

export const ProjectCard = ({ title, imgUrl, icon }) => {
  return (
    <div className='col col-12 col-sm-6 col-md-4'>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{icon}</span>
        </div>
      </div>
    </div>
  )
}