import { Link } from "react-router-dom"

const links = [
  {
    title: "Dashboard",
    apiUrl: "/"
  },
  {
    title: "Projects",
    apiUrl: "/projects"
  },
  {
    title: "Clients",
    apiUrl: "/clients"
  },
  {
    title: "Payments",
    apiUrl: "/payments"
  },
  {
    title: "Team",
    apiUrl: "/team"
  }
]

const Navbar = () => {
  return (
    <header className="py-5 bg-white sticky top-0 shadow z-99">
      <nav className="w-300 flex justify-between items-center mx-auto">
        <Link className="font-bold border border-green-700 pr-1 text-green-700"><span className="bg-green-700 text-white px-1">MLead</span> Desk</Link>
        <div className="flex justify-between items-center gap-14">
          <ul className="flex items-center gap-10 font-semibold text-gray-800">
            {links.map((link, index) => (
              <li key={index} className="hover:text-green-800 "><Link to={link.apiUrl}>{link.title}</Link></li>
            ))}
          </ul>
            <div className="w-10 h-10 bg-green-700 text-white font-semibold rounded-full overflow-hidden flex justify-center items-center">
              <h1>AD</h1>
            </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
