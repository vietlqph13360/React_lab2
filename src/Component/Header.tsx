import React from 'react'
import { Link } from 'react-router-dom'

type Props = { children: any }

const Header = (props: Props) => {
    return (
        <header className="p-3 mb-3 border-bottom  bg-danger">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none col-1">
                        <img src="https://res.cloudinary.com/vulong/image/upload/v1657504890/uploadimg/kf2zfzrmg8uijd2dmzci.png" alt="" width={100} height={50} />
                    </a>

                    <form className="col-12 col-lg-6 mb-3 mb-lg-0 me-lg-3">
                        <input type="search" className="form-control" placeholder="Search..." aria-label="Search" />
                    </form>
                    <div className="d-flex col-auto col-12 col-lg-auto me-lg-auto mx-auto">
                        <div className="collum mx-3 " ><a href="" className='text-light my-2'>Gọi đặt hàng</a><p className='text-light'>038976778</p></div>
                        <div className="collum mx-3 " ><a href="" className='text-light my-2'>Cửa hàng của bạn</a></div>
                        <div className="collum mx-3 " ><a href="" className='text-light my-2'>Tra cứu đơn hàng</a></div>
                    </div>
                    <div className="dropdown text-end">
                        <a href="#" className="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle" />
                        </a>
                        <ul className="dropdown-menu text-small" aria-labelledby="dropdownUser1">
                            <li><a className="dropdown-item" href="#">New project...</a></li>
                            <li><a className="dropdown-item" href="#">Settings</a></li>
                            <li><a className="dropdown-item" href="#">Profile</a></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><a className="dropdown-item" href="#">Sign out</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}



export default Header