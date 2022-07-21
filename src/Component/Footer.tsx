import React from 'react'
import styled from 'styled-components'

type Props = { children: any }

const Footer = (props: Props) => {
  return (
    <footer className="py-3 bg-light px-5 mt-5 w-100">
      <div className="row">
        <div className="col-12 col-lg-3 ">
          <h5 className="fw-bold mb-4 text-danger">Về chúng tôi</h5>
          <p className=''>
            Giới thiệu về công ty
            Câu hỏi thường gặp mua hàng
            Chính sách bảo mật
            Quy chế hoạt động
            Kiểm tra hóa đơn điện tử
            Tra cứu thông tin bảo hành
          </p>
        </div>
        <div className="col-12 col-lg-3">
          <h5 className=" text-center fw-bold mb-4 text-danger">TỪ KHÓA</h5>
          <ul className="nav flex-column text-center">
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-dark">#Điện thoại</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-dark">#Laptop</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-dark">#Đồng hồ</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-dark">#chất lượng</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-dark">#make-up</a></li>
          </ul>
        </div>
        <div className="col-12 col-lg-4 offset-1 ">
          <form>
            <h5 className="fw-bold mb-4 text-danger">ĐĂNG KÍ THÀNH VIÊN </h5>
            <p>Nhận ưu đãi chưa từng có trong lần mua hàng đầu tiên !</p>
            <div className="d-flex w-100 gap-2">
              <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
              <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
              <button className="btn btn-danger" type="button">Subscribe</button>
            </div>
          </form>
        </div>
      </div>
      <div className=" border-top ">
        <p className="text-center">© 2021 Company, Inc. All rights reserved.</p>
      </div>
    </footer>

  )
}
// const Footers = styled.div`
//   background-color: black;
//   border-radius: 1px;
//   padding: 30px 0;
//   text-align: center;
//   color: white;
// `

export default Footer