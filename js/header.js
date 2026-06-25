const headerHTML = `
  <header>
    <div class="logo">
      <a href="index.html">
        <img src="images/IMG_20250911_235530.png" alt="Avanzo Logo" class="cursor-pointer">
      </a>
    </div>

    <nav>
      <ul class="nav-links">
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About Us</a></li>
        <li class="dropdown">
          <a href="#">Services ▾</a>
          <ul class="dropdown-menu">
            <li><a href="https://cap.ind.in/">Cyber Awareness</a></li>
            <li><a href="law.html">Law & Legal Assistance</a></li>
            <li><a href="helpline.html">Helpline</a></li>
            <li><a href="serenity.html">Cyber Serenity</a></li>
          </ul>
        </li>
        <li><a href="affiliates.html">Affiliates</a></li>
        <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSfS98aNkIoI4f5ySB9FwMce_iAtwqlbp5_7qlLO9X_LG719hA/viewform">Internship</a></li>
        <li><a href="Contact-us.html">Contact Us</a></li>
        <li class="search-container">
          <a href="#" id="search-toggle">
            <img src="images/search.png" alt="Search" class="search-icon">
          </a>
          <input type="text" id="search-box" placeholder="Search">
        </li>
      </ul>

      <!-- Mobile Menu Button -->
      <div class="menu-toggle">&#9776;</div>
    </nav>
  </header>
`;

const headerContainer = document.getElementById("header-container");
if (headerContainer) {
  headerContainer.innerHTML = headerHTML;
}
