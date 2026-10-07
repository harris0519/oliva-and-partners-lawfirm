import PageHero from '../components/PageHero';

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About the firm"
        title="OLIVA & PARTNERS LAW FIRM"
        text="A tradition of quality legal service grounded in experience, advocacy, and ethical practice."
      />

      <section className="section">
        <div className="container split">
          <div>
            <p className="eyebrow">Our story</p>
            <h2>QUALITY LEGAL SERVICE SINCE 2008.</h2>
          </div>

          <div className="prose">
            <p><strong>OLIVA &amp; PARTNERS LAW FIRM</strong> traces its beginnings to the professional collaboration between Atty. Rommel V. Oliva and Justice Nesauro H. Firme, which commenced in June 2004. In June 2008, they formalized their law partnership under the name <strong>OLIVA FIRME &amp; ASSOCIATES LAW FIRM.</strong> Following the appointment of Justice Firme as a Member of the Judicial and Bar Council (JBC), representing the Academe, the Firm was subsequently renamed <strong>OLIVA &amp; PARTNERS LAW FIRM</strong>, reflecting its continued growth and the expanding role of its lawyers in the Firm’s practice.</p>

            <p>Atty. Oliva is a graduate of the University of Santo Tomas Faculty of Civil Law (1997) and has worked in government offices and other law firms prior to establishing his own legal practice. Justice Firme is likewise a graduate of the University of Santo Tomas Faculty of Civil Law (2003) and joined Atty. Oliva shortly after passing the Bar Examinations. Following his appointment to the Judicial and Bar Council, Justice Firme has been on leave from the Firm.</p>

            <p>Through the years, the Firm has rendered a wide range of legal services to its retaining clients, with particular emphasis on corporate legal practice, including the drafting and review of contracts, rendition of legal opinions, representation in labor, civil and criminal cases, and participation in board and corporate meetings.</p>

            <p>Since its formal establishment in 2008, the Firm has steadily expanded both its client base and its team of lawyers who work closely with the Firm’s partners in serving its clients and handling its growing legal practice.</p>

            <p>The Firm’s lawyers include Atty. Reagan G. Castillo-Oliva (UST), Atty. Pamela L. Faller (San Beda), Atty. Ahda B. Pajo (MLQU), Atty. Elmar H. Malapitan (SSC-R), Atty. Lawrence Anthony Bautista (JRU), Atty. Thomas Alvin Morada (JRU), Atty. Darlene B. Bibat (JRU), and Atty. Elizabeth L. Robles (MLC). Working collaboratively with the Firm’s partners, they form an integral part of the Firm’s professional team and contribute their respective experience and areas of practice in addressing the legal requirements of its clients.</p>
          </div>
        </div>
      </section>
    </>
  );
}
