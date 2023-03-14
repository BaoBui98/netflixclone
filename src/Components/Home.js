import React from "react";
import { Fragment } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { IoIosAdd } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
import "../Style/HomeStyle.css";
import TvImg from "../assets/tv.png";
import deviceVideo from "../assets/device-pile-vn.png";
import { useState } from "react";
const Home = () => {
  const [toggle, setToggle] = useState(true);
  const [toggle1, setToggle1] = useState(true);
  const [toggle2, setToggle2] = useState(true);
  const [toggle3, setToggle3] = useState(true);
  const [toggle4, setToggle4] = useState(true);
  const [toggle5, setToggle5] = useState(true);
  return (
    <Fragment>
      <div className="home-container-big">
        <div className="home-container">
          <div className="home-title-container">
            <div className="home-title">
              <h2>NETFLIX</h2>
            </div>
            <div className="btn-home-title">
              <select>
                <option>
                  <span>Tiếng việt</span>
                </option>
                <option>
                  <span>English</span>
                </option>
              </select>
              <button>Đăng nhập</button>
            </div>
          </div>
          <div className="home-descp">
            <h2>
              Chương trình truyền hình, phim không giới hạn và nhiều nội dung
              khác.
            </h2>
            <p>Xem ở mọi nơi. Hủy bất kỳ lúc nào.</p>
            <p>
              Bạn đã sẵn sàng xem chưa? Nhập email để tạo hoặc kích hoạt lại tư
              cách thành viên của bạn.
            </p>
            <div className="form-email">
              <input type="email" placeholder="Nhập địa chỉ email" />
              <button>
                <span>
                  Bắt đầu
                  <AiOutlineArrowRight />
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="header-tv">
          <div className="header-tv-title">
            <h2>Thưởng thức trên TV của bạn.</h2>
            <p>
              Xem trên TV thông minh, Playstation, Xbox, Chromecast, Apple TV,
              đầu phát Blu-ray và nhiều thiết bị khác.
            </p>
          </div>
          <div className="header-tv-video">
            <div className="header-tv-img">
              <img src={TvImg} alt="" />
            </div>
            <video loop autoPlay muted>
              <source
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
        <div className="header-tv-watch">
          <div className="header-tv-watch-title">
            <h2>Xem ở mọi nơi.</h2>
            <p>
              Phát trực tuyến không giới hạn phim và chương trình truyền hình
              trên điện thoại, máy tính bảng, máy tính xách tay và TV.
            </p>
          </div>
          <div className="header-tv-watch-video">
            <div className="header-tv-watch-video-img">
              <img src={deviceVideo} alt="" />
            </div>
            <video loop autoPlay muted>
              <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-vn.m4v" />
            </video>
          </div>
        </div>
        <div className="home-question">
          <h2>Câu hỏi thường gặp</h2>
          <ul>
            <li>
              <h3>
                <button onClick={() => setToggle(!toggle)}>
                  <span>Netflix là gì ?</span>
                  {toggle ? (
                    <IoIosAdd id="show-icon" />
                  ) : (
                    <AiOutlineClose id="hide-icon" />
                  )}
                </button>
                <div
                  className={
                    toggle ? "home-question-hide" : "home-question-show"
                  }
                >
                  <p>
                    Netflix là dịch vụ phát trực tuyến mang đến đa dạng các loại
                    chương trình truyền hình, phim, anime, phim tài liệu đoạt
                    giải thưởng và nhiều nội dung khác trên hàng nghìn thiết bị
                    có kết nối Internet.
                    <br />
                    <br />
                    Bạn có thể xem bao nhiêu tùy thích, bất cứ lúc nào bạn muốn
                    mà không gặp phải một quảng cáo nào – tất cả chỉ với một mức
                    giá thấp hàng tháng. Luôn có những nội dung mới để bạn khám
                    phá và những chương trình truyền hình, phim mới được bổ sung
                    mỗi tuần!
                  </p>
                </div>
              </h3>
            </li>
            <li>
              <h3>
                <button onClick={() => setToggle1(!toggle1)}>
                  <span>Tôi phải trả bao nhiêu tiền để xem Netflix ?</span>
                  {toggle1 ? (
                    <IoIosAdd id="show-icon" />
                  ) : (
                    <AiOutlineClose id="hide-icon" />
                  )}
                </button>
                <div
                  className={
                    toggle1 ? "home-question-hide" : "home-question-show"
                  }
                >
                  <p>
                    Xem Netflix trên điện thoại thông minh, máy tính bảng, TV
                    thông minh, máy tính xách tay hoặc thiết bị phát trực tuyến,
                    chỉ với một khoản phí cố định hàng tháng. Các gói dịch vụ
                    với mức giá từ 70.000 ₫ đến 260.000 ₫ mỗi tháng. Không phụ
                    phí, không hợp đồng.
                  </p>
                </div>
              </h3>
            </li>
            <li>
              <h3>
                <button onClick={() => setToggle2(!toggle2)}>
                  <span>Tôi có thể xem ở đâu?</span>
                  {toggle2 ? (
                    <IoIosAdd id="show-icon" />
                  ) : (
                    <AiOutlineClose id="hide-icon" />
                  )}
                </button>
                <div
                  className={
                    toggle2 ? "home-question-hide" : "home-question-show"
                  }
                >
                  <p>
                    Xem mọi lúc, mọi nơi. Đăng nhập bằng tài khoản Netflix của
                    bạn để xem ngay trên trang web netflix.com từ máy tính cá
                    nhân, hoặc trên bất kỳ thiết bị nào có kết nối Internet và
                    có cài đặt ứng dụng Netflix, bao gồm TV thông minh, điện
                    thoại thông minh, máy tính bảng, thiết bị phát đa phương
                    tiện trực tuyến và máy chơi game.
                    <br />
                    <br />
                    Bạn cũng có thể tải xuống các chương trình yêu thích bằng
                    ứng dụng trên iOS, Android hoặc Windows 10. Vào phần nội
                    dung đã tải xuống để xem trong khi di chuyển và khi không có
                    kết nối Internet. Mang Netflix theo bạn đến mọi nơi.
                  </p>
                </div>
              </h3>
            </li>
            <li>
              <h3>
                <button onClick={() => setToggle3(!toggle3)}>
                  <span>Làm thế nào để hủy?</span>
                  {toggle3 ? (
                    <IoIosAdd id="show-icon" />
                  ) : (
                    <AiOutlineClose id="hide-icon" />
                  )}
                </button>
                <div
                  className={
                    toggle3 ? "home-question-hide" : "home-question-show"
                  }
                >
                  <p>
                    Netflix rất linh hoạt. Không có hợp đồng phiền toái, không
                    ràng buộc. Bạn có thể dễ dàng hủy tài khoản trực tuyến chỉ
                    trong hai cú nhấp chuột. Không mất phí hủy – bạn có thể bắt
                    đầu hoặc ngừng tài khoản bất cứ lúc nào.
                  </p>
                </div>
              </h3>
            </li>
            <li>
              <h3>
                <button onClick={() => setToggle4(!toggle4)}>
                  <span>Tôi có thể xem gì trên Netflix?</span>
                  {toggle4 ? (
                    <IoIosAdd id="show-icon" />
                  ) : (
                    <AiOutlineClose id="hide-icon" />
                  )}
                </button>
                <div
                  className={
                    toggle4 ? "home-question-hide" : "home-question-show"
                  }
                >
                  <p>
                    Netflix có một thư viện phong phú gồm các phim truyện, phim
                    tài liệu, chương trình truyền hình, anime, tác phẩm giành
                    giải thưởng của Netflix và nhiều nội dung khác. Xem không
                    giới hạn bất cứ lúc nào bạn muốn.
                  </p>
                </div>
              </h3>
            </li>
            <li>
              <h3>
                <button onClick={() => setToggle5(!toggle5)}>
                  <span>Netflix có phù hợp cho trẻ em không?</span>
                  {toggle5 ? (
                    <IoIosAdd id="show-icon" />
                  ) : (
                    <AiOutlineClose id="hide-icon" />
                  )}
                </button>
                <div
                  className={
                    toggle5 ? "home-question-hide" : "home-question-show"
                  }
                >
                  <p>
                    Trải nghiệm Netflix Trẻ em có sẵn trong gói dịch vụ của bạn,
                    trao cho phụ huynh quyền kiểm soát trong khi các em có thể
                    thưởng thức các bộ phim và chương trình phù hợp cho gia đình
                    tại không gian riêng.
                    <br />
                    <br />
                    Hồ sơ Trẻ em đi kèm tính năng kiểm soát của cha mẹ (được bảo
                    vệ bằng mã PIN), cho phép bạn giới hạn độ tuổi cho nội dung
                    con mình được phép xem, cũng như chặn những phim hoặc chương
                    trình mà bạn không muốn các em nhìn thấy.
                  </p>
                </div>
              </h3>
            </li>
          </ul>
          <div className="home-question-submit">
            <h3>
              Bạn đã sẵn sàng xem chưa? Nhập email để tạo hoặc kích hoạt lại tư
              cách thành viên của bạn.
            </h3>
            <div className="home-question-submit-subcribe">
              <input type="email" placeholder="Địa chỉ email" />
              <button>Bắt đầu</button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
