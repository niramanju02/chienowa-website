import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";

function Layout({ children }) {
  return (
    <div className="container">
      <header className="header">
        <div className="brand">
          <div className="logo">chienowa</div>
          <div className="tag">知恵をつなぎ、課題をほどく。</div>
        </div>

        <nav className=   "nav">
          <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>
            Top
          </NavLink>
          <NavLink to="/service" className={({ isActive }) => (isActive ? "active" : "")}>
            Service
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
            About
          </NavLink>
          <NavLink to="/company" className={({ isActive }) => (isActive ? "active" : "")}>
            Company
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
            Contact
          </NavLink>
        </nav>
      </header>

      <main className="main">{children}</main>

      <footer className="footer">
        <small>© {new Date().getFullYear()} 株式会社chienowa</small>
      </footer>
    </div>
  );
}

function Home() {
  return (
    <Layout>
      <section className="hero">
        <h1>知恵をつなぎ、課題をほどく。</h1>
        <p>
          株式会社chienowaは、現場の「困った」を一緒に整理し、わかる形にして、ちゃんと動く仕組みにします。
        </p>
        <div className="heroActions">
          <a className="btn" href="/contact">相談してみる</a>
          <a className="btn ghost" href="/service">できることを見る</a>
        </div>
      </section>

      <section className="grid">
        <div className="card">
          <h2>システム開発</h2>
          <p>Web/API、業務システム、運用まで。小さく始めて育てられます。</p>
        </div>
        <div className="card">
          <h2>IT支援・技術顧問</h2>
          <p>設計レビュー、相談窓口、運用改善。社内の“頼れる人”になります。</p>
        </div>
        <div className="card">
          <h2>業務改善</h2>
          <p>現状整理から。ムダを減らして、続くやり方を一緒に作ります。</p>
        </div>
      </section>

      <section className="band">
        <h2>大切にしていること</h2>
        <ul className="list">
          <li>難しい言葉より、わかる言葉</li>
          <li>作って終わりにしない</li>
          <li>一緒に考えて、一緒に決める</li>
        </ul>
      </section>
    </Layout>
  );
}

function Service() {
  return (
    <Layout>
      <h1 className="pageTitle">事業内容</h1>

      <div className="card">
        <h2>1) システム開発</h2>
        <p>
          Webシステム / API / バックエンド / 運用。まずは小さく作って、現場で使いながら改善します。
        </p>
      </div>

      <div className="card">
        <h2>2) IT支援・技術顧問</h2>
        <p>
          技術相談、アーキテクチャ設計、レビュー、運用の壁打ちなど。必要な分だけ伴走します。
        </p>
      </div>

      <div className="card">
        <h2>3) 業務改善・IT活用支援</h2>
        <p>
          現状整理 → 課題の見える化 → シンプルな仕組み化。やりすぎず、続く形にします。
        </p>
      </div>

      <div className="note">
        <strong>対応領域（例）：</strong> React / FastAPI / PostgreSQL / Docker / Linux / Cloud など（必要に応じて最適化）
      </div>
    </Layout>
  );
}

function About() {
  return (
    <Layout>
      <h1 className="pageTitle">私たちについて</h1>

      <div className="card">
        <h2>ミッション</h2>
        <p>
          困っている人のそばで、一緒に考える。技術は目的ではなく手段。現場の知恵をつなぎ、課題をほどきます。
        </p>
      </div>

      <div className="card">
        <h2>社名の由来</h2>
        <p>
          「知恵の輪」のように、知恵をつなぎ、ほどき、次につなげる。そんな仕事の姿勢を名前にしました。
        </p>
      </div>

      <div className="card">
        <h2>代表について</h2>
        <p>
          ここに経歴・得意分野・価値観を簡潔に。小さな会社だからこそ、責任を持って最後まで見届けます。
        </p>
      </div>
    </Layout>
  );
}

function Company() {
  const definitions = [
    { term: "使命（Why we exist）", desc: "存在意義。私たちが社会に対して果たす役割。" },
    { term: "理念（What we believe in）", desc: "判断基準。大切にする価値観と姿勢。" },
    { term: "ビジョン（What we want to be）", desc: "ありたい姿。目指す未来の状態。" },
    { term: "基本方針", desc: "迷った時に戻る指針。仕事の進め方の軸。" },
    { term: "行動指針", desc: "日々の行動の約束。具体的に何をするか。" },
  ];

  const principles = [
    "難しい言葉より、わかる言葉で伝える",
    "作って終わりにしない（運用・改善まで）",
    "小さく始めて、現場で育てる",
  ];

  const profile = {
    title: "代表取締役",
    name: "（あなたの名前）",
    bio: [
      "（例）業務システム/インフラ/運用改善の支援を中心に、現場課題の整理と実装を得意としています。",
      "（例）要件定義〜設計〜実装〜運用まで一気通貫で対応し、継続的に改善します。",
    ],
  };

  const overview = [
    ["会社名", "株式会社chienowa"],
    ["設立", "（YYYY年MM月）"],
    ["代表", "（あなたの名前）"],
    ["所在地", "（都道府県・市区町村まで）"],
    ["事業内容", "システム開発 / IT支援・技術顧問 / 業務改善"],
    ["連絡先", "info@chienowa.example"],
  ];

  return (
    <Layout>
      <section className="companyHero">
        <p className="eyebrow">ABOUT</p>
        <h1 className="companyTitle">会社情報</h1>
        <p className="companyLead">知恵をつなぎ、課題をほどく。現場の「困った」を一緒に解決します。</p>
      </section>

      <section className="section">
        <h2 className="sectionTitle">定義</h2>
        <div className="definitionGrid">
          {definitions.map((d) => (
            <div key={d.term} className="defItem">
              <div className="defTerm">{d.term}</div>
              <div className="defDesc">{d.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="sectionTitle">使命（Why we exist）</h2>
        <div className="panel">
          <p className="text">
            （例）現場の知恵と技術をつなぎ、仕事が続く仕組みをつくる。
          </p>
        </div>

        <h2 className="sectionTitle">理念（What we believe in）</h2>
        <div className="panel">
          <ul className="bullets">
            {principles.map((x) => <li key={x}>{x}</li>)}
          </ul>
        </div>

        <h2 className="sectionTitle">ビジョン（What we want to be）</h2>
        <div className="panel">
          <p className="text">
            （例）ITが苦手な人でも安心して相談できる、やさしい技術パートナーになる。
          </p>
        </div>
      </section>

      <section className="section">
        <h2 className="sectionTitle">代表紹介</h2>
        <div className="profileCard">
          <div className="avatar" aria-hidden="true">C</div>
          <div>
            <div className="profileMeta">{profile.title}</div>
            <div className="profileName">{profile.name}</div>
            <div className="profileBio">
              {profile.bio.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="sectionTitle">会社概要</h2>
        <div className="overview">
          {overview.map(([k, v]) => (
            <div key={k} className="overviewRow">
              <div className="overviewKey">{k}</div>
              <div className="overviewVal">{v}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="sectionTitle">アクセス</h2>
        <div className="panel">
          <p className="text">（住所）</p>
          <p className="text">
            <a className="link" href="https://maps.google.com/?q=Tokyo" target="_blank" rel="noreferrer">
              Googleマップで開く
            </a>
          </p>
        </div>
      </section>
    </Layout>
  );
}


function Contact() {
  const formEmbedUrl = "https://forms.gle/SEAeNm6PrMCymhTF8";
  const formOpenUrl = formEmbedUrl.replace("?embedded=true", "");

  return (
    <Layout>
      <h1 className="pageTitle">お問い合わせ</h1>

      <div className="card">
        <p>以下のフォームからお問い合わせください。</p>

        <div className="formEmbed">
          <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScpbTjJDvHhctjs4wnSg_AcIIrA3CDLEy7dm5KD30ZpYdc23w/viewform?embedded=true" width="900" height="959" frameborder="0" marginheight="0" marginwidth="1100"
          ></iframe>
        </div>

        <p className="muted" style={{ marginTop: 12 }}>
          うまく表示されない場合は{""}
          <a className="link" href={formOpenUrl} target="_blank" rel="noreferrer">
            こちら（Googleフォームを開く）
          </a>
          から送信してください。
        </p>
      </div>
    </Layout>
  );
}


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/service" element={<Service />} />
      <Route path="/about" element={<About />} />
      <Route path="/company" element={<Company />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
