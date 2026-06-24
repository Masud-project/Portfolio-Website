function Footer() {
  return (
    <footer
      className="text-center py-4 mt-5"
      style={{
        backgroundColor: "#212529",
        color: "white",
      }}
    >
      <h5>MD MASUD RANA</h5>
      <p>Frontend Developer | React Developer</p>
      <p className="mb-0">
        © {new Date().getFullYear()} MD MASUD RANA. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;