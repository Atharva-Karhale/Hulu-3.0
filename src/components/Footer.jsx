import React from 'react'
import { FaLinkedin, FaGithub, FaFilePdf, FaBehanceSquare } from "react-icons/fa";

function Footer() {
  return (
    
<div class="" aria-labelledby="footer-heading">
  <h2 id="footer-heading" class="sr-only">Footer</h2>
  <div class="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
    <div class="xl:grid xl:grid-cols-3 xl:gap-8">
      <div class="space-y-8">
        <img class="h-20" src="/Assets/Hulu_Logo.png"/>
        <p class="text-sm leading-6 text-gray-600">An online movies & webseriese finder. Watch trailer and ratings for all your favourate shows. Website created by Atharva Karhale.</p>
        <div class="flex space-x-6">
          <a href="https://www.linkedin.com/in/atharva-karhale/" class="text-gray-400 hover:text-yellow-500 text-lg">
            <span class="sr-only">Linkedin</span>
            <FaLinkedin />
          </a>
          <a href="https://github.com/Atharva-Karhale" class="text-gray-400 hover:text-gray-500text-gray-400 hover:text-yellow-500 text-lg">
            <span class="sr-only">GitHub</span>
            <FaGithub />
          </a>
          <a href="https://drive.google.com/file/d/1Cps276kxAhc3aQFpvL_ZWLHS7NQgorbP/view?usp=sharing" class="text-gray-400 hover:text-gray-500text-gray-400 hover:text-yellow-500 text-lg">
            <span class="sr-only">Download CV</span>
            <FaFilePdf />
          </a>
          <a href="https://www.behance.net/askmodink" class="text-gray-400 hover:text-gray-500text-gray-400 hover:text-yellow-500 text-lg">
            <span class="sr-only">Behance</span>
            <FaBehanceSquare />
          </a>
        </div>
      </div>
      <div class="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
        <div class="md:grid md:grid-cols-2 md:gap-8">
          <div>
            <h3 class="text-sm font-semibold leading-6 text-white">Solutions</h3>
            <ul role="list" class="mt-6 space-y-4">
              <li>
                <a href="#" class="text-sm leading-6 text-gray-600 hover:text-white">Marketing</a>
              </li>
              <li>
                <a href="#" class="text-sm leading-6 text-gray-600 hover:text-white">Analytics</a>
              </li>
              <li>
                <a href="#" class="text-sm leading-6 text-gray-600 hover:text-white">Commerce</a>
              </li>
              <li>
                <a href="#" class="text-sm leading-6 text-gray-600 hover:text-white">Insights</a>
              </li>
            </ul>
          </div>
          <div class="mt-10 md:mt-0">
            <h3 class="text-sm font-semibold leading-6 text-white">Support</h3>
            <ul role="list" class="mt-6 space-y-4">
              <li>
                <a href="#" class="text-sm leading-6 text-gray-600 hover:text-white">Pricing</a>
              </li>
              <li>
                <a href="#" class="text-sm leading-6 text-gray-600 hover:text-white">Documentation</a>
              </li>
              <li>
                <a href="#" class="text-sm leading-6 text-gray-600 hover:text-white">Guides</a>
              </li>
              <li>
                <a href="#" class="text-sm leading-6 text-gray-600 hover:text-white">API Status</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="md:grid md:grid-cols-2 md:gap-8">
          <div>
            <h3 class="text-sm font-semibold leading-6 text-white">Company</h3>
            <ul role="list" class="mt-6 space-y-4">
              <li>
                <a href="#" class="text-sm leading-6 text-gray-600 hover:text-white">About</a>
              </li>
              <li>
                <a href="#" class="text-sm leading-6 text-gray-600 hover:text-white">Blog</a>
              </li>
              <li>
                <a href="#" class="text-sm leading-6 text-gray-600 hover:text-white">Jobs</a>
              </li>
              <li>
                <a href="#" class="text-sm leading-6 text-gray-600 hover:text-white">Press</a>
              </li>
              <li>
                <a href="#" class="text-sm leading-6 text-gray-600 hover:text-white">Partners</a>
              </li>
            </ul>
          </div>
          <div class="mt-10 md:mt-0">
            <h3 class="text-sm font-semibold leading-6 text-white">Legal</h3>
            <ul role="list" class="mt-6 space-y-4">
              <li>
                <a href="#" class="text-sm leading-6 text-gray-600 hover:text-white">Claim</a>
              </li>
              <li>
                <a href="#" class="text-sm leading-6 text-gray-600 hover:text-white">Privacy</a>
              </li>
              <li>
                <a href="#" class="text-sm leading-6 text-gray-600 hover:text-white">Terms</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
      <p class="text-xs leading-5 text-gray-500">&copy; 2024 Atharva Karhale, Inc. All rights reserved.</p>
    </div>
  </div>
</div>
  )
}

export default Footer