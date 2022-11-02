import React from 'react'
import './footer.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Footer() {
  return (
    <div>
        
<footer class="footer-distributed">

			<div class="footer-left">

				<h3>Nassim<span>Budget</span></h3>

				<p class="footer-links">
					<a href="#" class="link-1">Home</a>
					
					<a href="#">Blog</a>
				
					<a href="#">Pricing</a>
				
					<a href="#">About</a>
					
					<a href="#">Faq</a>
					
					<a href="#">Contact</a>
				</p>

				<p class="footer-company-name">NassimFlyes © 2022</p>
			</div>

			<div class="footer-center">

				<div>
					<i class="fa fa-map-marker"></i>
					<p><span>444 Chouabel</span> Av El Massira</p>
				</div>

				<div>
					<i class="fa fa-phone"></i>
					<p>+212.012.345.22</p>
				</div>

				

			</div>

			<div class="footer-right">

				<p class="footer-company-about">
					<span>About the projet</span>
					this web site benefit you to orgainze your money</p>

				

			</div>

		</footer>
    </div>
  )
}
