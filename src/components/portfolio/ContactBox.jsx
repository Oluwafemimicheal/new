
const ContactBox = ({icon, title, address, href}) => {
  return (
    <a href={href} target='_blank' className="flex items-center gap-5 bg-gray-300/50  p-3 rounded-2xl">
      <div className="bg-gray-700 p-3 rounded-lg">
        {icon}
      </div>
      <div><h4 className="text-gray-700 font-bold">{title}</h4>
        <p className="text-gray-700">{address}</p>
      </div>
    </a>
  )
}

export default ContactBox
