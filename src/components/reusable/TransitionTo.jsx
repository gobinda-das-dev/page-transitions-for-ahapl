import { useLocation, useNavigate } from "react-router";
import animatePageOut1 from "../transitions/animatePageOut1";
import animatePageOut2 from "../transitions/animatePageOut2";
import animatePageOut3 from "../transitions/animatePageOut3";


function TransitionTo({ children, to, base }) {
   const navigate = useNavigate()
   const location = useLocation()

   const handleClick = () => {
      if (location.pathname === to) return;

      switch (base) {
         case '/1':
            animatePageOut1(to, navigate)
            break;
         case '/2':
            animatePageOut2(to, navigate)
            break;
         case '/3':
            animatePageOut3(to, navigate)
            break;
         default:
            animatePageOut1(to, navigate)
      }
   }

   return (
      <div className='cursor-pointer' onClick={handleClick}>
         {children}
      </div>
   )
}


export default TransitionTo