import "../../public/main.css";

const Dashboard = () => {
  return (
    <div id="app">
      <aside className="aside is-placed-left is-expanded">
        <div className="aside-tools">
          <div>
            Admin <b className="font-black">One</b>
          </div>
        </div>
        <div className="menu is-menu-main">
          <p className="menu-label">General</p>
          <ul className="menu-list">
            <li className="--set-active-index-html">
              <a href="index.html">
                <span className="icon">
                  <i className="mdi mdi-desktop-mac"></i>
                </span>
                <span className="menu-item-label">Dashboard</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>

      <section className="is-title-bar">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          <ul>
            <li>Admin</li>
            <li>Tables</li>
          </ul>
          <a
            href="https://github.com/justboil/admin-one-tailwind"
            target="_blank"
            className="button blue"
          >
            <span className="icon">
              <i className="mdi mdi-github-circle"></i>
            </span>
            <span>GitHub</span>
          </a>
        </div>
      </section>

      <section className="is-hero-bar">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          <h1 className="title">Responsive Tables</h1>
        </div>
      </section>

      <section className="section main-section">
        <div className="card has-table">
          <header className="card-header">
            <p className="card-header-title">
              <span className="icon">
                <i className="mdi mdi-account-multiple"></i>
              </span>
              Clients
            </p>
            <a href="#" className="card-header-icon">
              <span className="icon">
                <i className="mdi mdi-reload"></i>
              </span>
            </a>
          </header>
          <div className="card-content">
            <table>
              <thead>
                <tr>
                  <th className="checkbox-cell">
                    <label className="checkbox">
                      <input type="checkbox" />
                      <span className="check"></span>
                    </label>
                  </th>
                  <th className="image-cell"></th>
                  <th>Name</th>
                  <th>Company</th>
                  <th>City</th>
                  <th>Progress</th>
                  <th>Created</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="checkbox-cell">
                    <label className="checkbox">
                      <input type="checkbox" />
                      <span className="check"></span>
                    </label>
                  </td>
                  <td className="image-cell">
                    <div className="image">
                      <img
                        src="https://avatars.dicebear.com/v2/initials/rebecca-bauch.svg"
                        className="rounded-full"
                      />
                    </div>
                  </td>
                  <td data-label="Name">Rebecca Bauch</td>
                  <td data-label="Company">Daugherty-Daniel</td>
                  <td data-label="City">South Cory</td>
                  <td data-label="Progress" className="progress-cell">
                    <progress max="100" value="79">
                      79
                    </progress>
                  </td>
                  <td data-label="Created">
                    <small className="text-gray-500" title="Oct 25, 2021">
                      Oct 25, 2021
                    </small>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
