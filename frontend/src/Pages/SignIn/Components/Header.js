import {Link} from 'react-router-dom';

export default function Header({
    heading,
    paragraph,
    linkName,
    linkUrl="/ResetPassword"
}){
    return(
        <div className="mb-10">
            <div className="flex justify-center">
                <img 
                    alt=""
                    className="h-30 w-30"
                    src="https://whoowner.b-cdn.net/wp-content/uploads/2018/01/Owner-of-Ashok-Leyland-Ltd-Wiki-Logo-profile-1024x591.jpg"/>
            </div>
            <h2 className="mt-6 text-center text-9xl font-extrabold text-gray-2000">
                {heading}
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600 mt-5">
            {paragraph} {' '}
            <Link to={linkUrl} className="font-medium text-purple-600 hover:text-purple-500">
                {linkName}
            </Link>
            </p>
        </div>
    )
}