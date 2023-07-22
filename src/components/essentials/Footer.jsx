import "@/styles/footer.scss";
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer_container">
        <span>Copyright &copy; 2023 nexusmart.up.railway.app All rights are reserved.</span>
        <div className="social">
          <i>
            <BsFacebook
              size={26.5}
              style={{ display: "block" }}
              color="#30529c"
            />
          </i>
          <i id="insta">
            <AiFillInstagram
              size={31.2}
              id="instagram"
              style={{ display: "block" }}
            />
          </i>
          <i>
            <AiFillTwitterCircle
              size={30}
              color="#27a4d6"
              style={{ display: "block" }}
            />
          </i>
          <i>
            <Link href={"https://github.com/nilotpaul"}>
              <FaGithub size={27.5} style={{ display: "block" }} />
            </Link>
          </i>
        </div>
      </div>
    </div>
  );
}
