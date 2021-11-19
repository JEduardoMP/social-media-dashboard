// Styles
import '../styles/toggle.styles.css'

const Header = () => {
    return ( 
        <div className="w-11/12 mx-auto divide-y divide-y-1 divide-gray divide-opacity-10 pt-6 mb-4 lg:divide-y-0 lg:flex lg:justify-between lg:items-center lg:w-11/12">
            <div className="mb-4">
                <h1 className="text-white text-2xl font-medium">Social Media Dashboard</h1>
                <h3 className="text-gray text-sm font-medium pt-1">Total Followers: 23,004</h3>
            </div>

            <div className="pt-4 flex items-center justify-between">
                <p className="text-gray font-medium">Dark Mode</p>

                <div className="switch-container flex items-center lg:ml-4">
                    <input type="checkbox" id="switch" />
                    <label for="switch" className="lbl" />
                </div>

            </div>
        </div>
    )
}
export default Header;