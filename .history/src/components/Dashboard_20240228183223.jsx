import React from "react";

const Dashboard = () => {
  return (
    <div id="app">
      <aside class="aside is-placed-left is-expanded">
        <div class="aside-tools">
          <div>
            Admin <b class="font-black">One</b>
          </div>
        </div>
        <div class="menu is-menu-main">
          <p class="menu-label">General</p>
          <ul class="menu-list">
            <li class="--set-active-index-html">
              <a href="index.html">
                <span class="icon">
                  <i class="mdi mdi-desktop-mac"></i>
                </span>
                <span class="menu-item-label">Dashboard</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>

      <section class="is-title-bar">
        <div class="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          <ul>
            <li>Admin</li>
            <li>Tables</li>
          </ul>
          <a
            href="https://github.com/justboil/admin-one-tailwind"
            target="_blank"
            class="button blue"
          >
            <span class="icon">
              <i class="mdi mdi-github-circle"></i>
            </span>
            <span>GitHub</span>
          </a>
        </div>
      </section>

      <section class="is-hero-bar">
        <div class="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          <h1 class="title">Responsive Tables</h1>
        </div>
      </section>

      <section class="section main-section">
        <div class="card has-table">
          <header class="card-header">
            <p class="card-header-title">
              <span class="icon">
                <i class="mdi mdi-account-multiple"></i>
              </span>
              Clients
            </p>
            <a href="#" class="card-header-icon">
              <span class="icon">
                <i class="mdi mdi-reload"></i>
              </span>
            </a>
          </header>
          <div class="card-content">
            <table>
              <thead>
                <tr>
                  <th class="checkbox-cell">
                    <label class="checkbox">
                      <input type="checkbox" />
                      <span class="check"></span>
                    </label>
                  </th>
                  <th class="image-cell"></th>
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
                  <td class="checkbox-cell">
                    <label class="checkbox">
                      <input type="checkbox" />
                      <span class="check"></span>
                    </label>
                  </td>
                  <td class="image-cell">
                    <div class="image">
                      <img
                        src="https://avatars.dicebear.com/v2/initials/rebecca-bauch.svg"
                        class="rounded-full"
                      />
                    </div>
                  </td>
                  <td data-label="Name">Rebecca Bauch</td>
                  <td data-label="Company">Daugherty-Daniel</td>
                  <td data-label="City">South Cory</td>
                  <td data-label="Progress" class="progress-cell">
                    <progress max="100" value="79">
                      79
                    </progress>
                  </td>
                  <td data-label="Created">
                    <small class="text-gray-500" title="Oct 25, 2021">
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
