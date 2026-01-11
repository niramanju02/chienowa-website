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

        <nav className="nav">
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
  return (
    <Layout>
      <h1 className="pageTitle">会社概要</h1>

      <table className="table">
        <tbody>
          <tr>
            <th>会社名</th>
            <td>株式会社chienowa</td>
          </tr>
          <tr>
            <th>代表者</th>
            <td>（氏名）</td>
          </tr>
          <tr>
            <th>所在地</th>
            <td>（都道府県・市区町村まで）</td>
          </tr>
          <tr>
            <th>設立</th>
            <td>（YYYY年MM月）</td>
          </tr>
          <tr>
            <th>事業内容</th>
            <td>システム開発 / IT支援・技術顧問 / 業務改善</td>
          </tr>
          <tr>
            <th>連絡先</th>
            <td>（メールアドレス）</td>
          </tr>
        </tbody>
      </table>

      <div className="note">
        ※ 法的・信用的に必要な情報（住所の粒度、電話番号の有無など）は運用に合わせて調整しよう。
      </div>
    </Layout>
  );
}

function Contact() {
  return (
    <Layout>
      <h1 className="pageTitle">お問い合わせ</h1>

      <div className="card">
        <p>まずは相談だけでも大丈夫です。内容が固まっていなくてもOK。</p>
        <p>
          メール： <a href="mailto:info@chienowa.example">info@chienowa.example</a>
        </p>
        <p className="muted">
          フォームを使うなら Googleフォーム / Formspree / Netlify Forms に差し替えできます。
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
