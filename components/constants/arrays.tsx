import { GrInstagram, GrSnapchat, GrLinkedin } from "react-icons/gr";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import mission from "../../public/assets/mission.png";
import vission from "../../public/assets/vission.png";
import values from "../../public/assets/values.png";
import TermsOfUse from "@/components/LegalContent/terms-of-use.mdx";
import PrivacyPolicy from "@/components/LegalContent/privacy-policy.mdx";
import NonDiscriminationPolicy from "@/components/LegalContent/non-discrimination-policy.mdx";
import OxtraAndRenters from "@/components/LegalContent/oxtra-and-renters.mdx";
import OxtraAndVehicleOwners from "@/components/LegalContent/oxtra-and-vehicle-owners.mdx";
import { FiFacebook } from "react-icons/fi";

type ContentMapType = {
  [key: string]: {
    content: React.ReactElement;
  };
};

type TocMapType = {
  [key: string]: string[];
};

export const brands = ["Toyota", "Chevrolet", "Ferrari"];
export const model = ["Camry", "Buggati", "X2"];

export const navigation = {
  company: [
    { name: "About us", href: "#" },
    { name: "Company", href: "/company" },
    { name: "Press", href: "#" },
    // { name: "Blog", href: "#" },
  ],
  products: [
    { name: "Rent a car", href: "/rent-a-car" },
    { name: "Vehicle owners", href: "#" },
    { name: "Sustainability plan", href: "/company#commitment" },
  ],
  business: [
    { name: "Our Terms", href: "/legal-and-compliance" },
    { name: "Our Policies", href: "/legal-and-compliance" },
    { name: "Oxtra and Renters", href: "/legal-and-compliance" },
    { name: "Oxtra and Vehicle Owners", href: "/legal-and-compliance" },
  ],
  contact: [
    { name: "hello@oxtra.africa", title: "General Enquiries", href: "#" },
    {
      name: "08167329144, 08094926942",
      title: "Call or Text",
      href: "#",
    },
  ],
};

export const offers = [
  {
    title: "Our Mission",
    description:
      "Our mission at Oxtra is to accelerate Africas transition to sustainable transportation.",
    image: mission,
  },

  {
    title: "Our Vision",
    description:
      "Lead Africa towards a sustainable transportation future, empowering people, protecting the planet.",
    image: vission,
  },

  {
    title: "Our Values",
    description:
      "Sustainability, Innovation, Customer-centricity, Inclusivity, and Transparency",
    image: values,
  },
];

export const socials = [
  {
    name: "Facebook",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z"
          stroke="#1877F2"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    href: "https://www.facebook.com/profile.php?id=61557476565691&mibextid=ZbWKwL",
  },
  {
    name: "Twitter",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20.45 19.6462L14.7313 10.665L20.33 4.50656C20.5265 4.28511 20.6277 3.99515 20.6118 3.69955C20.5959 3.40394 20.4641 3.12652 20.2451 2.92742C20.026 2.72833 19.7372 2.62361 19.4415 2.63596C19.1457 2.64832 18.8667 2.77676 18.665 2.99344L13.4834 8.69719L9.95001 3.14625C9.84846 2.98659 9.70829 2.85512 9.54245 2.76401C9.37661 2.6729 9.19048 2.62509 9.00126 2.625H4.50126C4.29973 2.62509 4.10193 2.67932 3.92853 2.78201C3.75513 2.88469 3.6125 3.03208 3.51554 3.20874C3.41858 3.38541 3.37086 3.58488 3.37736 3.78631C3.38387 3.98773 3.44436 4.1837 3.55251 4.35375L9.27126 13.335L3.66876 19.4934C3.56732 19.6024 3.48852 19.7304 3.43692 19.8701C3.38532 20.0097 3.36195 20.1582 3.36817 20.3069C3.37438 20.4557 3.41006 20.6017 3.47312 20.7366C3.53619 20.8714 3.6254 20.9924 3.73557 21.0925C3.84574 21.1927 3.97469 21.2699 4.11495 21.3198C4.2552 21.3698 4.40397 21.3914 4.55262 21.3834C4.70128 21.3754 4.84687 21.3379 4.98096 21.2733C5.11505 21.2086 5.23496 21.1179 5.33376 21.0066L10.5191 15.3028L14.0525 20.8537C14.1541 21.0134 14.2942 21.1449 14.4601 21.236C14.6259 21.3271 14.812 21.3749 15.0013 21.375H19.5013C19.7028 21.3749 19.9006 21.3207 20.074 21.218C20.2474 21.1153 20.39 20.9679 20.487 20.7913C20.5839 20.6146 20.6317 20.4151 20.6252 20.2137C20.6187 20.0123 20.5582 19.8163 20.45 19.6462ZM15.6191 19.125L6.55063 4.875H8.38345L17.4519 19.125H15.6191Z"
          fill="black"
        />
      </svg>
    ),
    href: "https://twitter.com/oxtraafrica",
  },
  {
    name: "Instagram",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 15.75C14.0711 15.75 15.75 14.0711 15.75 12C15.75 9.92893 14.0711 8.25 12 8.25C9.92893 8.25 8.25 9.92893 8.25 12C8.25 14.0711 9.92893 15.75 12 15.75Z"
          stroke="url(#paint0_linear_5518_1553)"
          stroke-width="1.5"
          stroke-miterlimit="10"
        />
        <path
          d="M16.125 3.375H7.875C5.38972 3.375 3.375 5.38972 3.375 7.875V16.125C3.375 18.6103 5.38972 20.625 7.875 20.625H16.125C18.6103 20.625 20.625 18.6103 20.625 16.125V7.875C20.625 5.38972 18.6103 3.375 16.125 3.375Z"
          stroke="url(#paint1_linear_5518_1553)"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M16.875 8.25C17.4963 8.25 18 7.74632 18 7.125C18 6.50368 17.4963 6 16.875 6C16.2537 6 15.75 6.50368 15.75 7.125C15.75 7.74632 16.2537 8.25 16.875 8.25Z"
          fill="url(#paint2_linear_5518_1553)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_5518_1553"
            x1="12"
            y1="8.25"
            x2="12"
            y2="15.75"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#C40098" />
            <stop offset="1" stop-color="#F56057" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_5518_1553"
            x1="12"
            y1="3.375"
            x2="12"
            y2="20.625"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#C40098" />
            <stop offset="1" stop-color="#F56057" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_5518_1553"
            x1="16.875"
            y1="6"
            x2="16.875"
            y2="8.25"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#C40098" />
            <stop offset="1" stop-color="#F56057" />
          </linearGradient>
        </defs>
      </svg>
    ),
    href: "https://www.instagram.com/oxtraafrica",
  },
  {
    name: "Snapchat",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M22.3633 17.7069C22.0373 18.5129 21.2713 18.8899 20.8353 19.0669C20.499 19.2007 20.153 19.3087 19.8003 19.3899L19.7773 19.4779C19.6865 19.8632 19.4688 20.207 19.1593 20.4539C18.8357 20.7116 18.4308 20.8456 18.0173 20.8319H18.0023L17.9713 20.8309C17.7517 20.8216 17.5334 20.7918 17.3193 20.7419C17.0962 20.693 16.8686 20.6679 16.6403 20.6669C16.5103 20.6669 16.3803 20.6769 16.2473 20.6969C15.9844 20.7785 15.7422 20.916 15.5373 21.0999C14.616 21.9412 13.4304 22.4355 12.1843 22.4979L12.1493 22.4999H12.1133C12.0753 22.4999 12.0313 22.4999 11.9853 22.4979C11.9513 22.4992 11.9173 22.4999 11.8833 22.4999H11.8493L11.8163 22.4979C10.5697 22.4362 9.38364 21.9418 8.46229 21.0999C8.25734 20.9168 8.0156 20.7797 7.75329 20.6979C7.62329 20.6779 7.49329 20.6679 7.36329 20.6679C7.13929 20.6699 6.91629 20.6979 6.69629 20.7479C6.49629 20.7969 6.29229 20.8279 6.08629 20.8419C5.65324 20.8789 5.22192 20.7534 4.87629 20.4899C4.5492 20.2413 4.31814 19.8873 4.22229 19.4879C4.21409 19.4556 4.20609 19.4232 4.19829 19.3909C3.84555 19.3102 3.49953 19.2026 3.16329 19.0689C2.72729 18.8899 1.96329 18.5129 1.63829 17.7109C1.56009 17.5187 1.51414 17.315 1.50229 17.1079V17.0959C1.48137 16.6885 1.60418 16.2868 1.84929 15.9609C2.09829 15.6309 2.46829 15.3889 2.90129 15.3079C3.66463 15.1516 4.34298 14.718 4.80529 14.0909L4.82129 14.0699L4.83729 14.0499C5.05429 13.7819 5.24729 13.4899 5.41029 13.1789C5.30382 13.144 5.19874 13.1049 5.09529 13.0619C4.75518 12.9225 4.43744 12.7338 4.15229 12.5019C3.84729 12.2459 3.20629 11.5759 3.38729 10.5629L3.41029 10.4369L3.45429 10.3169C3.61369 9.87347 3.90598 9.49004 4.29129 9.21886C4.68314 8.94354 5.15361 8.8025 5.63229 8.81686C5.60529 7.74986 5.72229 6.68186 5.98229 5.64686L6.00829 5.54186L6.04929 5.44186C6.52137 4.28098 7.32127 3.28268 8.35129 2.56886C9.36951 1.86477 10.5804 1.49246 11.8183 1.50286L12.1623 1.49986C13.4051 1.48652 14.6216 1.85858 15.6443 2.56486C16.6755 3.2784 17.4768 4.27667 17.9503 5.43786L17.9913 5.53786L18.0183 5.64386C18.2768 6.6766 18.3942 7.7396 18.3673 8.80386H18.3753C18.6563 8.80386 18.9323 8.85686 19.1903 8.95486C19.5583 9.07486 19.8803 9.29286 20.1253 9.57686C20.3983 9.89286 20.5683 10.2769 20.6263 10.6779L20.6403 10.7709L20.6413 10.8649C20.6623 11.9949 19.7913 12.6879 18.9013 13.0629L18.8903 13.0679C18.7892 13.1088 18.6868 13.1465 18.5833 13.1809C18.8333 13.6669 19.1633 14.0949 19.5543 14.4449C20.0303 14.8699 20.5843 15.1679 21.1703 15.3229C21.5743 15.4169 21.9183 15.6529 22.1523 15.9659C22.4013 16.2979 22.5173 16.6999 22.4973 17.0979V17.1039C22.486 17.3108 22.4407 17.5146 22.3633 17.7069ZM20.9713 17.1449C20.9874 17.1053 20.9968 17.0634 20.9993 17.0209C21.0023 16.965 20.9857 16.9098 20.9523 16.8649C20.9201 16.8214 20.8725 16.7917 20.8193 16.7819C20.7042 16.7521 20.5901 16.7184 20.4773 16.6809L20.4733 16.6789C20.1829 16.5827 19.9012 16.462 19.6313 16.3179C19.244 16.1101 18.8828 15.857 18.5553 15.5639C17.8916 14.967 17.3719 14.2275 17.0353 13.4009L17.0303 13.3889C16.9561 13.2597 16.9097 13.1165 16.894 12.9685C16.8784 12.8204 16.8938 12.6706 16.9393 12.5289C17.013 12.3598 17.1356 12.2167 17.2913 12.1179L17.3413 12.0849C17.5733 11.9379 17.8493 11.8449 18.0653 11.7719L18.1053 11.7589L18.1153 11.7559L18.1263 11.7519C18.1912 11.7298 18.2556 11.7061 18.3193 11.6809L18.3453 11.6699L18.3633 11.6619H18.3653C18.4782 11.6123 18.5877 11.5555 18.6933 11.4919C19.0603 11.2669 19.1443 11.0489 19.1413 10.8919C19.124 10.7689 19.0719 10.6533 18.9913 10.5589C18.9128 10.4673 18.8081 10.4021 18.6913 10.3719L18.6853 10.3689C18.5504 10.3116 18.4026 10.2916 18.2573 10.3109C18.1978 10.3205 18.1399 10.3383 18.0853 10.3639C18.0016 10.4087 17.9151 10.4481 17.8263 10.4819L17.8163 10.4859C17.7638 10.5062 17.7104 10.5242 17.6563 10.5399L17.6503 10.5409C17.5113 10.5811 17.3686 10.6073 17.2243 10.6189C17.0497 10.6233 16.8797 10.5627 16.7473 10.4489L16.7753 9.93886L16.7793 9.87786C16.9527 8.58614 16.8794 7.27324 16.5633 6.00886C16.2008 5.11685 15.5864 4.34965 14.7953 3.80086C14.0265 3.26963 13.1117 2.9901 12.1773 3.00086L11.8153 3.00286C10.8816 2.99285 9.96784 3.27309 9.20029 3.80486C8.41049 4.35366 7.79755 5.12053 7.43629 6.01186C7.12059 7.27426 7.04696 8.58504 7.21929 9.87486C7.23129 10.0659 7.24229 10.2579 7.25229 10.4489C7.10525 10.571 6.91704 10.6322 6.72629 10.6199C6.59689 10.6139 6.46833 10.5958 6.34229 10.5659L6.33529 10.5649C6.15353 10.5211 5.97835 10.4535 5.81429 10.3639C5.74535 10.3309 5.66969 10.3145 5.59329 10.3159C5.43555 10.3096 5.28016 10.3557 5.15129 10.4469C5.01882 10.541 4.9186 10.6737 4.86429 10.8269C4.82029 11.0749 5.00129 11.2819 5.22729 11.4379L5.28729 11.4779C5.41185 11.5573 5.54339 11.6253 5.68029 11.6809C5.76367 11.7156 5.84878 11.7459 5.93529 11.7719C6.18743 11.8496 6.43023 11.9549 6.65929 12.0859C6.67829 12.0969 6.69529 12.1089 6.71329 12.1209C6.86686 12.2194 6.98765 12.3615 7.06029 12.5289C7.10467 12.6712 7.11941 12.8211 7.10358 12.9694C7.08776 13.1176 7.04172 13.2611 6.96829 13.3909L6.96529 13.4009C6.71863 13.9737 6.39462 14.51 6.00229 14.9949C5.5582 15.5866 4.98229 16.0666 4.32029 16.3969C3.96029 16.5749 3.57729 16.7049 3.18029 16.7819C3.12706 16.7917 3.07953 16.8214 3.04729 16.8649C3.01356 16.9097 2.99658 16.9648 2.99929 17.0209C3.0019 17.0639 3.0117 17.1061 3.02829 17.1459C3.08937 17.2768 3.18784 17.3868 3.31129 17.4619C3.51129 17.5999 3.80529 17.7259 4.18829 17.8379C4.30229 17.8709 4.42429 17.9029 4.55429 17.9339C4.78629 17.9889 5.04429 18.0399 5.32429 18.0859C5.45029 18.1059 5.50429 18.3259 5.57729 18.6829C5.60629 18.8329 5.64029 18.9809 5.67929 19.1279C5.69256 19.1946 5.7295 19.2542 5.78329 19.2959C5.83629 19.3359 5.90229 19.3549 5.96629 19.3459C6.09629 19.3389 6.22329 19.3199 6.34929 19.2889C6.67988 19.2118 7.01787 19.1709 7.35729 19.1669C7.60029 19.1669 7.84429 19.1889 8.08429 19.2329C8.59662 19.372 9.06923 19.6292 9.46429 19.9839C10.1285 20.5945 10.9852 20.9539 11.8863 20.9999C11.9163 20.9999 11.9463 20.9989 11.9763 20.9959C12.0133 20.9989 12.0623 20.9999 12.1133 20.9999C13.0144 20.9539 13.8711 20.5945 14.5353 19.9839C14.9306 19.6295 15.4031 19.3724 15.9153 19.2329C16.1553 19.1889 16.3983 19.1669 16.6433 19.1669C16.9827 19.168 17.321 19.2059 17.6523 19.2799C17.7773 19.3099 17.9053 19.3269 18.0323 19.3319H18.0543C18.1155 19.3369 18.1764 19.3183 18.2243 19.2799C18.2743 19.2396 18.3083 19.1829 18.3203 19.1199C18.3595 18.9741 18.3936 18.827 18.4223 18.6789C18.4953 18.3229 18.5493 18.1049 18.6743 18.0839C18.9803 18.0339 19.2583 17.9779 19.5063 17.9179C19.6133 17.8919 19.7143 17.8639 19.8103 17.8369C20.1603 17.7339 20.4373 17.6199 20.6353 17.4949C20.6959 17.456 20.7537 17.4129 20.8083 17.3659C20.8783 17.3059 20.934 17.2311 20.9713 17.1469V17.1449Z"
          fill="#FFFC00"
        />
      </svg>
    ),
    href: "https://www.snapchat.com/add/oxtraafrica?share_id=Ce4biuz4wA0&locale=en-US",
  },
  {
    name: "Tiktok",
    icon: (
      <svg
        width="22"
        height="24"
        viewBox="0 0 22 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_5518_1560)">
          <path
            d="M15.7025 8.64166C17.2483 9.74607 19.142 10.3959 21.1872 10.3959V6.46237C20.8001 6.46246 20.414 6.42207 20.0353 6.34188V9.43813C17.9903 9.43813 16.0969 8.78839 14.5508 7.68406V15.7113C14.5508 19.727 11.2937 22.9821 7.27627 22.9821C5.77727 22.9821 4.38394 22.5291 3.22656 21.7523C4.54756 23.1023 6.38976 23.9398 8.42778 23.9398C12.4455 23.9398 15.7027 20.6847 15.7027 16.6688V8.64166H15.7025ZM17.1235 4.67322C16.3335 3.81062 15.8147 2.69586 15.7025 1.46342V0.95752H14.611C14.8858 2.52389 15.823 3.8621 17.1235 4.67322ZM5.76758 18.6708C5.32622 18.0925 5.08764 17.3849 5.08871 16.6573C5.08871 14.8207 6.57845 13.3316 8.41644 13.3316C8.75891 13.3314 9.09937 13.384 9.42585 13.4874V9.46593C9.04433 9.41371 8.65933 9.39145 8.27451 9.39964V12.5297C7.94788 12.4262 7.60724 12.3737 7.2646 12.374C5.4267 12.374 3.93705 13.863 3.93705 15.6998C3.93705 16.9986 4.68162 18.1231 5.76758 18.6708Z"
            fill="#FF004F"
          />
          <path
            d="M14.5498 7.68398C16.096 8.78831 17.9893 9.43804 20.0344 9.43804V6.3418C18.8928 6.09873 17.8822 5.50254 17.1224 4.67322C15.8219 3.86202 14.8848 2.52381 14.6101 0.95752H11.743V16.6687C11.7365 18.5003 10.2493 19.9833 8.41532 19.9833C7.33466 19.9833 6.3745 19.4685 5.76647 18.6708C4.68067 18.1231 3.93601 16.9985 3.93601 15.6999C3.93601 13.8632 5.42567 12.3741 7.26357 12.3741C7.61571 12.3741 7.9551 12.4289 8.27347 12.5298V9.39973C4.32655 9.48125 1.15234 12.7045 1.15234 16.6687C1.15234 18.6477 1.94277 20.4416 3.2257 21.7524C4.38307 22.5291 5.77632 22.9822 7.27541 22.9822C11.2929 22.9822 14.5499 19.7269 14.5499 15.7113L14.5498 7.68398Z"
            fill="black"
          />
          <path
            d="M20.0338 6.34179V5.50477C19.0044 5.50633 17.9953 5.21819 17.1218 4.6733C17.895 5.51927 18.913 6.10265 20.0338 6.34196M14.6094 0.957517C14.5832 0.807857 14.5631 0.657195 14.5491 0.505903V0H10.5905V15.7113C10.5842 17.5428 9.09699 19.0258 7.2629 19.0258C6.74295 19.0266 6.2301 18.905 5.76579 18.671C6.37382 19.4686 7.33399 19.9833 8.41465 19.9833C10.2486 19.9833 11.7359 18.5004 11.7424 16.6688V0.9576L14.6094 0.957517ZM8.27305 9.39972V8.5085C7.94226 8.46328 7.60877 8.44066 7.2749 8.4408C3.25697 8.4408 0 11.696 0 15.7113C0 18.2287 1.28003 20.4473 3.22519 21.7524C1.94226 20.4416 1.15183 18.6476 1.15183 16.6687C1.15183 12.7046 4.32596 9.48124 8.27305 9.39972Z"
            fill="#00F2EA"
          />
        </g>
        <defs>
          <clipPath id="clip0_5518_1560">
            <rect width="21.1867" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    href: "https://www.tiktok.com/oxtra-africa",
  },
  {
    name: "Linkedin",
    icon: (
      <svg
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5.1875 1.25C4.45815 1.25 3.75868 1.53973 3.24296 2.05546C2.72723 2.57118 2.4375 3.27065 2.4375 4C2.4375 4.72935 2.72723 5.42882 3.24296 5.94454C3.75868 6.46027 4.45815 6.75 5.1875 6.75C5.91685 6.75 6.61632 6.46027 7.13204 5.94454C7.64777 5.42882 7.9375 4.72935 7.9375 4C7.9375 3.27065 7.64777 2.57118 7.13204 2.05546C6.61632 1.53973 5.91685 1.25 5.1875 1.25ZM3.9375 4C3.9375 3.66848 4.0692 3.35054 4.30362 3.11612C4.53804 2.8817 4.85598 2.75 5.1875 2.75C5.51902 2.75 5.83696 2.8817 6.07138 3.11612C6.3058 3.35054 6.4375 3.66848 6.4375 4C6.4375 4.33152 6.3058 4.64946 6.07138 4.88388C5.83696 5.1183 5.51902 5.25 5.1875 5.25C4.85598 5.25 4.53804 5.1183 4.30362 4.88388C4.0692 4.64946 3.9375 4.33152 3.9375 4ZM2.4375 8C2.4375 7.80109 2.51652 7.61032 2.65717 7.46967C2.79782 7.32902 2.98859 7.25 3.1875 7.25H7.1875C7.38641 7.25 7.57718 7.32902 7.71783 7.46967C7.85848 7.61032 7.9375 7.80109 7.9375 8V21C7.9375 21.1989 7.85848 21.3897 7.71783 21.5303C7.57718 21.671 7.38641 21.75 7.1875 21.75H3.1875C2.98859 21.75 2.79782 21.671 2.65717 21.5303C2.51652 21.3897 2.4375 21.1989 2.4375 21V8ZM3.9375 8.75V20.25H6.4375V8.75H3.9375ZM9.4375 8C9.4375 7.80109 9.51652 7.61032 9.65717 7.46967C9.79782 7.32902 9.98859 7.25 10.1875 7.25H14.1875C14.3864 7.25 14.5772 7.32902 14.7178 7.46967C14.8585 7.61032 14.9375 7.80109 14.9375 8V8.434L15.3725 8.247C16.1225 7.92648 16.9182 7.7257 17.7305 7.652C20.5055 7.4 22.9375 9.58 22.9375 12.38V21C22.9375 21.1989 22.8585 21.3897 22.7178 21.5303C22.5772 21.671 22.3864 21.75 22.1875 21.75H18.1875C17.9886 21.75 17.7978 21.671 17.6572 21.5303C17.5165 21.3897 17.4375 21.1989 17.4375 21V14C17.4375 13.6685 17.3058 13.3505 17.0714 13.1161C16.837 12.8817 16.519 12.75 16.1875 12.75C15.856 12.75 15.538 12.8817 15.3036 13.1161C15.0692 13.3505 14.9375 13.6685 14.9375 14V21C14.9375 21.1989 14.8585 21.3897 14.7178 21.5303C14.5772 21.671 14.3864 21.75 14.1875 21.75H10.1875C9.98859 21.75 9.79782 21.671 9.65717 21.5303C9.51652 21.3897 9.4375 21.1989 9.4375 21V8ZM10.9375 8.75V20.25H13.4375V14C13.4375 13.2707 13.7272 12.5712 14.243 12.0555C14.7587 11.5397 15.4582 11.25 16.1875 11.25C16.9168 11.25 17.6163 11.5397 18.132 12.0555C18.6478 12.5712 18.9375 13.2707 18.9375 14V20.25H21.4375V12.38C21.4375 10.476 19.7765 8.972 17.8675 9.146C17.2117 9.20567 16.5692 9.36763 15.9635 9.626L14.4835 10.261C14.3693 10.31 14.2448 10.3299 14.1211 10.3189C13.9973 10.3079 13.8782 10.2663 13.7745 10.1979C13.6708 10.1295 13.5857 10.0364 13.5269 9.927C13.4681 9.81757 13.4374 9.69524 13.4375 9.571V8.75H10.9375Z"
          fill="#0077B5"
        />
      </svg>
    ),
    href: "https://www.linkedin.com/company/oxtra-africa/",
  },
];

export const filters = [
  {
    name: "Location",
    options: [
      { label: "VI", value: "VI" },
      { label: "Ikoyi", value: "Ikoyi" },
      { label: "Lekki", value: "Lekki" },
    ],
  },
  {
    name: "Price",
    options: [
      { label: "₦5,000 - ₦15,000", value: "₦5,000 - ₦15,000" },
      { label: "₦15,000 - ₦30,000", value: "₦15,000 - ₦30,000" },
      { label: "₦30,000 - ₦60,000", value: "₦30,000 - ₦60,000" },
    ],
  },
  {
    name: "Car Brand",
    options: [
      { label: "Honda", value: "Honda" },
      { label: "Toyota", value: "Toyota" },
      { label: "Buggati", value: "Buggati" },
    ],
  },
  {
    name: "Model",
    options: [
      { label: "Accord", value: "Accord" },
      { label: "Corolla", value: "Corolla" },
      { label: "Veyron", value: "Veyron" },
    ],
  },
  {
    name: "Year",
    options: [
      { label: "2020", value: "2020" },
      { label: "2021", value: "Corolla" },
      { label: "2022", value: "2022" },
    ],
  },
];

export const vehicles = [
  {
    name: "Sedan",
  },
  {
    name: "Mercedes",
  },
  {
    name: "SUV",
  },
  {
    name: "Toyota",
  },
  {
    name: "Haulage",
  },
];

export const sortings = [
  "Most popular rentals",
  "Top rated rentals",
  "Low cose rentals",
];

export const cars = [
  "Honda CR-V (2015)",
  "Toyota Corolla",
  "Buggati Veyron",
  "Acura RLX",
  "Audi S3",
  "Aston Martin DBX",
  "Acura MDX",
  "Audi A4",
  "Honda Accord",
];
export const carAccessories = [
  {
    name: "AC",
    img: "../assets/ac.jpg",
  },
  {
    name: "6 Seater",
    img: "../assets/seater.jpg",
  },
  {
    name: "4 Bags",
    img: "../assets/bags.jpg",
  },
  {
    name: "Automatic",
    img: "../assets/automatic.jpg",
  },
];

export const carFeatures = [
  {
    name: "AC",
    img: "/assets/ac.jpg",
  },
  {
    name: "6 Seater",
    img: "/assets/seater.jpg",
  },
  {
    name: "4 Bags",
    img: "/assets/bags.jpg",
  },
  {
    name: "Automatic",
    img: "/assets/automatic.jpg",
  },
  {
    name: "Bluetooth",
    img: "/assets/bluetooth.jpg",
  },
  {
    name: "4 Doors",
    img: "/assets/seater.jpg",
  },
  {
    name: "Reverse Camera",
    img: "/assets/seater.jpg",
  },
];

export const carBenefits = [
  "Free cancellation up to 48 hours before pick-up",
  "Unlimited mileage",
  "Clean cars",
];

export const sideBarRoutes = [
  {
    name: "Rent a car",
    route: "/customer/rent-a-car/requests",
    img: "/assets/rent-car.svg",
  },
  // {
  //   name: "Courier service",
  //   route: "/customer/courier-service",
  //   img: "/assets/courier.svg",
  // },

  {
    name: "Payments",
    route: "/customer/payments",
    img: "/assets/payment.svg",
  },
  {
    name: "History",
    route: "/customer/history",
    img: "/assets/history.svg",
  },
  { name: "Help", route: "/customer/help", img: "/assets/help.svg" },
  {
    name: "Settings",
    route: "/customer/settings",
    img: "/assets/settings.svg",
  },
];

export const carOwnerRoutes = [
  {
    name: "Car Rental Requests",
    route: "/client/rentals",
    img: "/assets/rent-car.svg",
  },
  {
    name: "Vehicles",
    route: "/client/vehicles",
    img: "/assets/courier.svg",
  },

  {
    name: "Payments",
    route: "/client/payments",
    img: "/assets/payment.svg",
  },
  {
    name: "History",
    route: "/client/history",
    img: "/assets/history.svg",
  },
  { name: "Help", route: "/client/help", img: "/assets/help.svg" },
  {
    name: "Promos",
    route: "/client/promos",
    img: "/assets/settings.svg",
  },
];

export const paymentOptions = ["Card", "Wallet", "Transfer"];

export const countries = [
  { country: "Afghanistan", code: "93", iso: "AF" },
  { country: "Albania", code: "355", iso: "AL" },
  { country: "Algeria", code: "213", iso: "DZ" },
  { country: "American Samoa", code: "1-684", iso: "AS" },
  { country: "Andorra", code: "376", iso: "AD" },
  { country: "Angola", code: "244", iso: "AO" },
  { country: "Anguilla", code: "1-264", iso: "AI" },
  { country: "Antarctica", code: "672", iso: "AQ" },
  { country: "Antigua and Barbuda", code: "1-268", iso: "AG" },
  { country: "Argentina", code: "54", iso: "AR" },
  { country: "Armenia", code: "374", iso: "AM" },
  { country: "Aruba", code: "297", iso: "AW" },
  { country: "Australia", code: "61", iso: "AU" },
  { country: "Austria", code: "43", iso: "AT" },
  { country: "Azerbaijan", code: "994", iso: "AZ" },
  { country: "Bahamas", code: "1-242", iso: "BS" },
  { country: "Bahrain", code: "973", iso: "BH" },
  { country: "Bangladesh", code: "880", iso: "BD" },
  { country: "Barbados", code: "1-246", iso: "BB" },
  { country: "Belarus", code: "375", iso: "BY" },
  { country: "Belgium", code: "32", iso: "BE" },
  { country: "Belize", code: "501", iso: "BZ" },
  { country: "Benin", code: "229", iso: "BJ" },
  { country: "Bermuda", code: "1-441", iso: "BM" },
  { country: "Bhutan", code: "975", iso: "BT" },
  { country: "Bolivia", code: "591", iso: "BO" },
  { country: "Bosnia and Herzegovina", code: "387", iso: "BA" },
  { country: "Botswana", code: "267", iso: "BW" },
  { country: "Brazil", code: "55", iso: "BR" },
  { country: "British Indian Ocean Territory", code: "246", iso: "IO" },
  { country: "British Virgin Islands", code: "1-284", iso: "VG" },
  { country: "Brunei", code: "673", iso: "BN" },
  { country: "Bulgaria", code: "359", iso: "BG" },
  { country: "Burkina Faso", code: "226", iso: "BF" },
  { country: "Burundi", code: "257", iso: "BI" },
  { country: "Cambodia", code: "855", iso: "KH" },
  { country: "Cameroon", code: "237", iso: "CM" },
  { country: "Canada", code: "1", iso: "CA" },
  { country: "Cape Verde", code: "238", iso: "CV" },
  { country: "Cayman Islands", code: "1-345", iso: "KY" },
  { country: "Central African Republic", code: "236", iso: "CF" },
  { country: "Chad", code: "235", iso: "TD" },
  { country: "Chile", code: "56", iso: "CL" },
  { country: "China", code: "86", iso: "CN" },
  { country: "Christmas Island", code: "61", iso: "CX" },
  { country: "Cocos Islands", code: "61", iso: "CC" },
  { country: "Colombia", code: "57", iso: "CO" },
  { country: "Comoros", code: "269", iso: "KM" },
  { country: "Cook Islands", code: "682", iso: "CK" },
  { country: "Costa Rica", code: "506", iso: "CR" },
  { country: "Croatia", code: "385", iso: "HR" },
  { country: "Cuba", code: "53", iso: "CU" },
  { country: "Curacao", code: "599", iso: "CW" },
  { country: "Cyprus", code: "357", iso: "CY" },
  { country: "Czech Republic", code: "420", iso: "CZ" },
  { country: "Democratic Republic of the Congo", code: "243", iso: "CD" },
  { country: "Denmark", code: "45", iso: "DK" },
  { country: "Djibouti", code: "253", iso: "DJ" },
  { country: "Dominica", code: "1-767", iso: "DM" },
  { country: "Dominican Republic", code: "1-809, 1-829, 1-849", iso: "DO" },
  { country: "East Timor", code: "670", iso: "TL" },
  { country: "Ecuador", code: "593", iso: "EC" },
  { country: "Egypt", code: "20", iso: "EG" },
  { country: "El Salvador", code: "503", iso: "SV" },
  { country: "Equatorial Guinea", code: "240", iso: "GQ" },
  { country: "Eritrea", code: "291", iso: "ER" },
  { country: "Estonia", code: "372", iso: "EE" },
  { country: "Ethiopia", code: "251", iso: "ET" },
  { country: "Falkland Islands", code: "500", iso: "FK" },
  { country: "Faroe Islands", code: "298", iso: "FO" },
  { country: "Fiji", code: "679", iso: "FJ" },
  { country: "Finland", code: "358", iso: "FI" },
  { country: "France", code: "33", iso: "FR" },
  { country: "French Polynesia", code: "689", iso: "PF" },
  { country: "Gabon", code: "241", iso: "GA" },
  { country: "Gambia", code: "220", iso: "GM" },
  { country: "Georgia", code: "995", iso: "GE" },
  { country: "Germany", code: "49", iso: "DE" },
  { country: "Ghana", code: "233", iso: "GH" },
  { country: "Gibraltar", code: "350", iso: "GI" },
  { country: "Greece", code: "30", iso: "GR" },
  { country: "Greenland", code: "299", iso: "GL" },
  { country: "Grenada", code: "1-473", iso: "GD" },
  { country: "Guam", code: "1-671", iso: "GU" },
  { country: "Guatemala", code: "502", iso: "GT" },
  { country: "Guernsey", code: "44-1481", iso: "GG" },
  { country: "Guinea", code: "224", iso: "GN" },
  { country: "Guinea-Bissau", code: "245", iso: "GW" },
  { country: "Guyana", code: "592", iso: "GY" },
  { country: "Haiti", code: "509", iso: "HT" },
  { country: "Honduras", code: "504", iso: "HN" },
  { country: "Hong Kong", code: "852", iso: "HK" },
  { country: "Hungary", code: "36", iso: "HU" },
  { country: "Iceland", code: "354", iso: "IS" },
  { country: "India", code: "91", iso: "IN" },
  { country: "Indonesia", code: "62", iso: "ID" },
  { country: "Iran", code: "98", iso: "IR" },
  { country: "Iraq", code: "964", iso: "IQ" },
  { country: "Ireland", code: "353", iso: "IE" },
  { country: "Isle of Man", code: "44-1624", iso: "IM" },
  { country: "Israel", code: "972", iso: "IL" },
  { country: "Italy", code: "39", iso: "IT" },
  { country: "Ivory Coast", code: "225", iso: "CI" },
  { country: "Jamaica", code: "1-876", iso: "JM" },
  { country: "Japan", code: "81", iso: "JP" },
  { country: "Jersey", code: "44-1534", iso: "JE" },
  { country: "Jordan", code: "962", iso: "JO" },
  { country: "Kazakhstan", code: "7", iso: "KZ" },
  { country: "Kenya", code: "254", iso: "KE" },
  { country: "Kiribati", code: "686", iso: "KI" },
  { country: "Kosovo", code: "383", iso: "XK" },
  { country: "Kuwait", code: "965", iso: "KW" },
  { country: "Kyrgyzstan", code: "996", iso: "KG" },
  { country: "Laos", code: "856", iso: "LA" },
  { country: "Latvia", code: "371", iso: "LV" },
  { country: "Lebanon", code: "961", iso: "LB" },
  { country: "Lesotho", code: "266", iso: "LS" },
  { country: "Liberia", code: "231", iso: "LR" },
  { country: "Libya", code: "218", iso: "LY" },
  { country: "Liechtenstein", code: "423", iso: "LI" },
  { country: "Lithuania", code: "370", iso: "LT" },
  { country: "Luxembourg", code: "352", iso: "LU" },
  { country: "Macao", code: "853", iso: "MO" },
  { country: "Macedonia", code: "389", iso: "MK" },
  { country: "Madagascar", code: "261", iso: "MG" },
  { country: "Malawi", code: "265", iso: "MW" },
  { country: "Malaysia", code: "60", iso: "MY" },
  { country: "Maldives", code: "960", iso: "MV" },
  { country: "Mali", code: "223", iso: "ML" },
  { country: "Malta", code: "356", iso: "MT" },
  { country: "Marshall Islands", code: "692", iso: "MH" },
  { country: "Mauritania", code: "222", iso: "MR" },
  { country: "Mauritius", code: "230", iso: "MU" },
  { country: "Mayotte", code: "262", iso: "YT" },
  { country: "Mexico", code: "52", iso: "MX" },
  { country: "Micronesia", code: "691", iso: "FM" },
  { country: "Moldova", code: "373", iso: "MD" },
  { country: "Monaco", code: "377", iso: "MC" },
  { country: "Mongolia", code: "976", iso: "MN" },
  { country: "Montenegro", code: "382", iso: "ME" },
  { country: "Montserrat", code: "1-664", iso: "MS" },
  { country: "Morocco", code: "212", iso: "MA" },
  { country: "Mozambique", code: "258", iso: "MZ" },
  { country: "Myanmar", code: "95", iso: "MM" },
  { country: "Namibia", code: "264", iso: "NA" },
  { country: "Nauru", code: "674", iso: "NR" },
  { country: "Nepal", code: "977", iso: "NP" },
  { country: "Netherlands", code: "31", iso: "NL" },
  { country: "Netherlands Antilles", code: "599", iso: "AN" },
  { country: "New Caledonia", code: "687", iso: "NC" },
  { country: "New Zealand", code: "64", iso: "NZ" },
  { country: "Nicaragua", code: "505", iso: "NI" },
  { country: "Niger", code: "227", iso: "NE" },
  { country: "Nigeria", code: "234", iso: "NG" },
  { country: "Niue", code: "683", iso: "NU" },
  { country: "North Korea", code: "850", iso: "KP" },
  { country: "Northern Mariana Islands", code: "1-670", iso: "MP" },
  { country: "Norway", code: "47", iso: "NO" },
  { country: "Oman", code: "968", iso: "OM" },
  { country: "Pakistan", code: "92", iso: "PK" },
  { country: "Palau", code: "680", iso: "PW" },
  { country: "Palestine", code: "970", iso: "PS" },
  { country: "Panama", code: "507", iso: "PA" },
  { country: "Papua New Guinea", code: "675", iso: "PG" },
  { country: "Paraguay", code: "595", iso: "PY" },
  { country: "Peru", code: "51", iso: "PE" },
  { country: "Philippines", code: "63", iso: "PH" },
  { country: "Pitcairn", code: "64", iso: "PN" },
  { country: "Poland", code: "48", iso: "PL" },
  { country: "Portugal", code: "351", iso: "PT" },
  { country: "Puerto Rico", code: "1-787, 1-939", iso: "PR" },
  { country: "Qatar", code: "974", iso: "QA" },
  { country: "Republic of the Congo", code: "242", iso: "CG" },
  { country: "Reunion", code: "262", iso: "RE" },
  { country: "Romania", code: "40", iso: "RO" },
  { country: "Russia", code: "7", iso: "RU" },
  { country: "Rwanda", code: "250", iso: "RW" },
  { country: "Saint Barthelemy", code: "590", iso: "BL" },
  { country: "Saint Helena", code: "290", iso: "SH" },
  { country: "Saint Kitts and Nevis", code: "1-869", iso: "KN" },
  { country: "Saint Lucia", code: "1-758", iso: "LC" },
  { country: "Saint Martin", code: "590", iso: "MF" },
  { country: "Saint Pierre and Miquelon", code: "508", iso: "PM" },
  { country: "Saint Vincent and the Grenadines", code: "1-784", iso: "VC" },
  { country: "Samoa", code: "685", iso: "WS" },
  { country: "San Marino", code: "378", iso: "SM" },
  { country: "Sao Tome and Principe", code: "239", iso: "ST" },
  { country: "Saudi Arabia", code: "966", iso: "SA" },
  { country: "Senegal", code: "221", iso: "SN" },
  { country: "Serbia", code: "381", iso: "RS" },
  { country: "Seychelles", code: "248", iso: "SC" },
  { country: "Sierra Leone", code: "232", iso: "SL" },
  { country: "Singapore", code: "65", iso: "SG" },
  { country: "Sint Maarten", code: "1-721", iso: "SX" },
  { country: "Slovakia", code: "421", iso: "SK" },
  { country: "Slovenia", code: "386", iso: "SI" },
  { country: "Solomon Islands", code: "677", iso: "SB" },
  { country: "Somalia", code: "252", iso: "SO" },
  { country: "South Africa", code: "27", iso: "ZA" },
  { country: "South Korea", code: "82", iso: "KR" },
  { country: "South Sudan", code: "211", iso: "SS" },
  { country: "Spain", code: "34", iso: "ES" },
  { country: "Sri Lanka", code: "94", iso: "LK" },
  { country: "Sudan", code: "249", iso: "SD" },
  { country: "Suriname", code: "597", iso: "SR" },
  { country: "Svalbard and Jan Mayen", code: "47", iso: "SJ" },
  { country: "Swaziland", code: "268", iso: "SZ" },
  { country: "Sweden", code: "46", iso: "SE" },
  { country: "Switzerland", code: "41", iso: "CH" },
  { country: "Syria", code: "963", iso: "SY" },
  { country: "Taiwan", code: "886", iso: "TW" },
  { country: "Tajikistan", code: "992", iso: "TJ" },
  { country: "Tanzania", code: "255", iso: "TZ" },
  { country: "Thailand", code: "66", iso: "TH" },
  { country: "Togo", code: "228", iso: "TG" },
  { country: "Tokelau", code: "690", iso: "TK" },
  { country: "Tonga", code: "676", iso: "TO" },
  { country: "Trinidad and Tobago", code: "1-868", iso: "TT" },
  { country: "Tunisia", code: "216", iso: "TN" },
  { country: "Turkey", code: "90", iso: "TR" },
  { country: "Turkmenistan", code: "993", iso: "TM" },
  { country: "Turks and Caicos Islands", code: "1-649", iso: "TC" },
  { country: "Tuvalu", code: "688", iso: "TV" },
  { country: "U.S. Virgin Islands", code: "1-340", iso: "VI" },
  { country: "Uganda", code: "256", iso: "UG" },
  { country: "Ukraine", code: "380", iso: "UA" },
  { country: "United Arab Emirates", code: "971", iso: "AE" },
  { country: "United Kingdom", code: "44", iso: "GB" },
  { country: "United States", code: "1", iso: "US" },
  { country: "Uruguay", code: "598", iso: "UY" },
  { country: "Uzbekistan", code: "998", iso: "UZ" },
  { country: "Vanuatu", code: "678", iso: "VU" },
  { country: "Vatican", code: "379", iso: "VA" },
  { country: "Venezuela", code: "58", iso: "VE" },
  { country: "Vietnam", code: "84", iso: "VN" },
  { country: "Wallis and Futuna", code: "681", iso: "WF" },
  { country: "Western Sahara", code: "212", iso: "EH" },
  { country: "Yemen", code: "967", iso: "YE" },
  { country: "Zambia", code: "260", iso: "ZM" },
  { country: "Zimbabwe", code: "263", iso: "ZW" },
];

export const contentMap: ContentMapType = {
  "Terms of Use": {
    content: <TermsOfUse />,
  },
  "Privacy Policy": {
    content: <PrivacyPolicy />,
  },
  "Non-discrimination Policy": {
    content: <NonDiscriminationPolicy />,
  },
  "Oxtra and Renters": {
    content: <OxtraAndRenters />,
  },
  "Oxtra and Vehicle Owners": {
    content: <OxtraAndVehicleOwners />,
  },
};

export const tocMap: TocMapType = {
  "Terms of Use": [
    "1. OUR SERVICES",
    "2. INTELLECTUAL PROPERTY RIGHTS",
    "3. USER REPRESENTATIONS",
    "4. USER REGISTRATION",
    "5. VEHICLE AND IDENTITY VERIFICATION",
    "6. PAYMENTS",
    "7. PROHIBITED ACTIVITIES",
    "8. USER GENERATED CONTRIBUTIONS",
    "9. GUIDELINES FOR REVIEWS",
    "10. MOBILE APPLICATION LICENSE",
    "11. SOCIAL MEDIA",
    "12. SERVICES MANAGEMENT",
    "13. PRIVACY POLICY",
    "14. COPYRIGHT INFRINGEMENTS",
    "15. TERMS AND TERMINATIONS",
    "16. MODIFICATIONS AND INTERRUPTIONS",
    "17. GOVERNING LAW",
    "18. DISPUTE RESOLUTION",
    "20. DISCLAIMER",
    "21. LIMITATIONS OF LIABILITY",
    "22. INDEMNIFICATION",
    "23. USER DATA",
    "24. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES",
    "25. MISCELLANEOUS",
    "26. LIABILITY",
    "27. CONTACT US AND CUSTOMER SUPPORT",
  ],
  "Privacy Policy": [
    "1. OUR COMMITMENT TO YOUR PRIVACY",
    "2. WHO WE ARE",
    "3. CONTACT DETAILS",
    "4. WHY WE COLLECT YOUR PERSONAL DATA",
    "5. SOURCES WE COLLECT YOUR PERSONAL DATA FROM",
    "6. INFORMATION WE COLLECT ABOUT YOU",
    "7. HOW WE USE YOUR PERSONAL DATA",
    "8. COOKIES AND OTHER TECHNOLOGIES",
    "9. WHO DO WE SHARE YOUR PERSONAL DATA WITH?",
    "10. DATA SECURITY",
    "11. DATA RETENTION",
    "12. YOUR RIGHTS",
    "13. RIGHT TO COMPLAINT",
    "14. UPDATING PERSONAL DATA ABOUT YOU",
    "15. CHANGES TO OUR PRIVACY NOTICE",
  ],
  "Non-discrimination Policy": [
    "1. INFORMATION ON THE FEATURES OF LISTING",
    "2. STATEMENT OF PREFERENCE",
    "3. DECLINE OR CANCELLATION",
    "4. DIFFERENT TERMS AND CONDITIONS",
    "5. RESERVATION BASED ON AGE/PREGNANCY / FAMILY STATUS",
    "6. WHAT WILL NOT AMOUNT TO DECLINE OR CANCELLATION",
    "7. ASSUMPTIONS",
    "8. DISABILITY",
    "9. STATEMENT ON DISABILITY",
  ],
  "Oxtra and Renters": [
    "1. INTRODUCTION",
    "2. DESCRIPTION OF SERVICE",
    "3. ACCEPTANCE OF TERMS",
    "4. USER ELIGIBILITY",
    "5. REGISTERING AN ACCOUNT",
    "6. WHAT WILL NOT AMOUNT TO DECLINE OR CANCELLATION",
    "7. BOOKING A VEHICLE",
    "8. STANDARD RENTAL TERMS",
    "9. VERIFICATION OF RENTERS IDENTITY",
    "10. VEHICLE OWNER CANCELLATION",
    "11. TRIPS CANCELED BY OXTRA",
    "12. COMPLIMENTARY RIDE",
    "13. EXTRA CHARGES",
    "14. AIRPORT PICK-UP AND DROP-OFF",
    "15. MONTHLY BOOKING",
    "16. CONDITION OF VEHICLES BOOKED",
    "17. USE OF THE RENTED VEHICLE",
    "18. PAYMENT OF PARKING FEES AND FINES",
    "19. RETURN OF VEHICLE",
    "20. REPOSSESSION",
    "21. CHARGES AND PAYMENTS",
    "22. ACCEPTANCE OF TERMS THROUGH PAYMENT ",
    "23. TAXES",
    "24. YOUR COMMITMENTS",
    "25. COMMUNICATIONS WITH YOU",
    "26. GOVERNING LAW",
    "27. DISPUTE RESOLUTION",
    "28. SEVERABILITY",
    "29. VARIATION AND MODIFICATION OF TERMS",
    "30. CONCLUSION",
  ],
  "Oxtra and Vehicle Owners": [
    "1. INTRODUCTION",
    "2. ACCEPTANCE OF TERMS",
    "3. USER ELIGIBILITY",
    "4. REGISTERING AN ACCOUNT",
    "5. LISTING YOUR VEHICLE",
    "6. VEHICLE OWNERS VERIFICATION",
    "7. CONDITION OF VEHICLES LISTED",
    "8. VEHICLE AVAILABILITY",
    "9. PAYMENT AND FEES",
    "10. TAXES",
    "11. YOUR COMMITMENTS",
    "12. ACCOUNT ACTIVITY",
    "13. PROHIBITED ACTIVITIES",
    "14. YOUR CONTENT",
    "15. COMMUNICATIONS WITH YOU",
    "16. GOVERNING LAW",
    "17. DISPUTE RESOLUTION",
    "18. SEVERABILITY",
    "19. VARIATION AND MODIFICATION OF TERMS",
  ],
};

export const topics = [
  "Terms of Use",
  "Privacy Policy",
  "Non-discrimination Policy",
  "Oxtra and Renters",
  "Oxtra and Vehicle Owners",
];

export const category = [
  {
    id: 0,
    name: "Requirements",
    questions: [
      {
        question: "What are the age requirements to rent a car?",
        answer:
          "We have partnered with Paystack to give our customers as many payment options as possible to promote flexibility",
      },

      {
        question: "What methods of payment do you accept?",
        answer:
          "We have partnered with Paystack to give our customers as many payment options as possible to promote flexibility",
      },
      {
        question: "Do I need to refill the gas tank before returning the car?",
        answer:
          "We have partnered with Paystack to give our customers as many payment options as possible to promote flexibility",
      },

      {
        question: "What are your cancellation policies?",
        answer:
          "We have partnered with Paystack to give our customers as many payment options as possible to promote flexibility",
      },

      {
        question: "What happens if I need to extend my rental period?",
        answer:
          "We have partnered with Paystack to give our customers as many payment options as possible to promote flexibility",
      },
    ],
  },
  {
    id: 1,
    name: "Vehicles",
    questions: [
      {
        question: "What are the age requirements to rent a car?",
        answer:
          "We have partnered with Paystack to give our customers as many payment options as possible to promote flexibility",
      },

      {
        question: "What methods of payment do you accept?",
        answer:
          "We have partnered with Paystack to give our customers as many payment options as possible to promote flexibility",
      },
      {
        question: "Do I need to refill the gas tank before returning the car?",
        answer:
          "We have partnered with Paystack to give our customers as many payment options as possible to promote flexibility",
      },

      {
        question: "What are your cancellation policies?",
        answer:
          "We have partnered with Paystack to give our customers as many payment options as possible to promote flexibility",
      },

      {
        question: "What happens if I need to extend my rental period?",
        answer:
          "We have partnered with Paystack to give our customers as many payment options as possible to promote flexibility",
      },
    ],
  },
  {
    id: 2,
    name: "Payments",
    questions: [
      {
        question: "What are the age requirements to rent a car?",
        answer:
          "We have partnered with Paystack to give our customers as many payment options as possible to promote flexibility",
      },

      {
        question: "What methods of payment do you accept?",
        answer:
          "We have partnered with Paystack to give our customers as many payment options as possible to promote flexibility",
      },
      {
        question: "Do I need to refill the gas tank before returning the car?",
        answer:
          "We have partnered with Paystack to give our customers as many payment options as possible to promote flexibility",
      },

      {
        question: "What are your cancellation policies?",
        answer:
          "We have partnered with Paystack to give our customers as many payment options as possible to promote flexibility",
      },

      {
        question: "What happens if I need to extend my rental period?",
        answer:
          "We have partnered with Paystack to give our customers as many payment options as possible to promote flexibility",
      },
    ],
  },
  {
    id: 3,
    name: "How to book?",

    questions: [
      {
        question: "What are the age requirements to rent a car?",
        answer:
          "We have partnered with Paystack to give our customers as many payment options as possible to promote flexibility",
      },

      {
        question: "What methods of payment do you accept?",
        answer:
          "We have partnered with Paystack to give our customers as many payment options as possible to promote flexibility",
      },
      {
        question: "Do I need to refill the gas tank before returning the car?",
        answer:
          "We have partnered with Paystack to give our customers as many payment options as possible to promote flexibility",
      },

      {
        question: "What are your cancellation policies?",
        answer:
          "We have partnered with Paystack to give our customers as many payment options as possible to promote flexibility",
      },

      {
        question: "What happens if I need to extend my rental period?",
        answer:
          "We have partnered with Paystack to give our customers as many payment options as possible to promote flexibility",
      },
    ],
  },
];

export const colorTypes = [
  { value: "Blue", label: "Blue", color: "#00629F", fontColor: "#FFFFFF" },
  {
    value: "Maroon",
    label: "Maroon",
    color: "#6D191B",
    fontColor: "#FFFFFF",
  },
  {
    value: "Yellow",
    label: "Yellow",
    color: "#FFEE36",
    fontColor: "#000000",
  },
  {
    value: "Silver",
    label: "Silver",
    color: "#D1D2D1",
    fontColor: "#000000",
  },
  {
    value: "Purple",
    label: "Purple",
    color: "#683276",
    fontColor: "#FFFFFF",
  },
  {
    value: "Orange",
    label: "Orange",
    color: "#E86D34",
    fontColor: "#FFFFFF",
  },
  { value: "Green", label: "Green", color: "#00744E", fontColor: "#FFFFFF" },
  { value: "Gray", label: "Gray", color: "#7C7C7C", fontColor: "#FFFFFF" },
  { value: "Pink", label: "Pink", color: "#EA7B88", fontColor: "#000000" },
  { value: "Tan", label: "Tan", color: "#BE9A6D", fontColor: "#000000" },
  { value: "Brown", label: "Brown", color: "#3C271C", fontColor: "#FFFFFF" },
  { value: "Black", label: "Black", color: "#000000", fontColor: "#FFFFFF" },
  { value: "Red", label: "Red", color: "#AB1A30", fontColor: "#FFFFFF" },
  { value: "Gold", label: "Gold", color: "#D1A631", fontColor: "#000000" },
  { value: "Beige", label: "Beige", color: "#EADBBA", fontColor: "#000000" },
  { value: "White", label: "White", color: "#FFFFFF", fontColor: "#000000" },
  {
    value: "Claret",
    label: "Claret",
    color: "#7f1734",
    fontColor: "#FFFFFF",
  },
  {
    value: "Copper",
    label: "Copper",
    color: "#b87333",
    fontColor: "#FFFFFF",
  },
  { value: "Cream", label: "Cream", color: "#fffdd0", fontColor: "#000000" },
];
