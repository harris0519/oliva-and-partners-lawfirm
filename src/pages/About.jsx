import PageHero from '../components/PageHero';

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About the firm"
        title="OLIVA & PARTNES LAW FIRM"
        text="A tradition of quality legal service grounded in experience, advocacy, and ethical practice."
      />

      <section className="section">
        <div className="container split">
          <div>
            <p className="eyebrow">Our story</p>
            <h2>QUALITY LEGAL SERVICE SINCE 2008.</h2>
          </div>

          <div className="prose">
            <p><strong>OLIVA &amp; PARTNERS LAW FIRM</strong> is formed in June 2008 after Atty. Rommel V. Oliva and Justice Nesauro H. Firme formalized their law partnership which started since June 2004.</p>

            <p>Atty. Oliva is a graduate of University of Santo Tomas Faculty of Civil Law in 1997 and has worked both in government offices and in other law firms before he decided to put up the Law Firm. Justice Firme on the other hand is likewise a graduate of University of Santo Tomas Faculty of Civil Law in 2003 and right after hurdling the bar examination given by the Supreme Court, he joined Atty. Oliva in the law office. In view of his recent appointment as a Regular Member of the Judicial and Bar Council representing the Academe, he is currently on leave from the law firm.</p>

            <p>Through years of legal practice, the Law Firm has rendered various legal services to our retaining clients by specializing in corporate legal practice, which necessarily includes the drafting of contracts, rendition of legal opinion, actual handling of all cases (labor, civil and criminal) of our clients, as well as attendance in board meetings.</p>

            <p>Since 2008, the Law Firm has gradually expanded in terms of the number of retaining clients as well as hiring associate lawyers. Some of our long-time retaining clients are Hon. Secretary Benhur Abalos of DILG, Extra Excel International (Phils.), Inc., Allegro Resources Corporation, Counterflow Movers Inc., Hypro Construction and Development Corporation, Music Museum Group, Inc., Airtropolis Consolidators Phils. Inc., Mind Alliance Ventures, Inc. (owner of Memoxpress), Sahara Games and Amusement Phils. Corp., SOS Children’s Villages Inc., Skymed Pharma Distributor, Driven By Passion, Inc. (owner of Primadonna), Mr. Quickie, Inc. and among others.</p>

            <p>Meanwhile, the Law Firm has hired full time associate lawyers Elmar H. Malapitan (SSC-R), Pamela L. Faller (San Beda), Ahda B. Pajo (MLQU), Lawrence Anthony Bautista (JRU), Thomas Alvin Morada (JRU), Darlene B. Bibat (JRU), and Elizabeth L. Robles (MLC) to meet the demands of the clients.</p>

            <p>The expansion of the Law Firm portrays the advocacy and desire of Atty. Oliva and Justice Firme to render quality legal service to its clients within the bounds of ethical measures.</p>
          </div>
        </div>
      </section>
    </>
  );
}
