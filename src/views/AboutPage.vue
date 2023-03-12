<template>
  <main>
    <div class="box">
      <div class="social">
        <h1>Ijtimoiy tarmoqlarda</h1>
        <ul>
          <li>
            <a href="https://t.me/landburgerohangaron" target="_blank"
              >Telegram</a
            >
          </li>
          <li>
            <a href="https://www.instagram.com/land_burger_uz/" target="_blank">
              Instagram
            </a>
          </li>
          <li>
            <a href="tel::+998330106161"> Telefon </a>
          </li>
        </ul>
      </div>

      <div id="map">
        <h1>Lokatsiya</h1>
        <iframe
          data-aos="fade-up"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4140.294602723148!2d69.64569920735268!3d40.90393822185957!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae33f8c9f3a253%3A0x996a6b18dc750ab6!2sBurger%20land!5e1!3m2!1sen!2s!4v1663472211259!5m2!1sen!2s"
          referrerpolicy="no-referrer-when-downgrade"
        >
        </iframe>
      </div>
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style lang="css">
.box {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
}
.social ul {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.social ul li {
  margin-top: 20px;
  list-style: none;
}
.social ul li a {
  width: 200px;
  text-decoration: none;
  color: #030303;
  padding: 15px 30px;
  background: rgb(234, 237, 236);
  border-radius: 10px;
  border: 1px solid transparent;
  transition: 0.2s ease-in;
}
.social ul li a:hover {
  border: 1px solid #4220b2;
  background: transparent;
}
#map iframe {
  height: 300px;
  width: 500px;
  border-radius: 10px;
  border: 2px solid lightseagreen;
}
@media (max-width: 600px) {
  #map iframe {
    width: 100%;
  }
  .social ul {
    padding-left: 0 !important;
    gap: 8px;
  }
  .social ul li {
    width: 100%;
    margin-top: 0;
  }
  .social ul li a {
    width: 100%;
    display: block;
  }
}
</style>
