import StocksList from './non-static/companies/StocksList';
import Header from './static/header/Header';
import { BrowserRouter, Route, Routes, Outlet, Navigate } from "react-router-dom";
import Company from './non-static/company/Company';
import About from './static/About';
import NoMatch from './static/NoMatch';
import pathLinks from '../data/pathLinks';

function App() {
  const { companies, about } = pathLinks
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate replace to={companies} />}></Route> {/*this is a redirect*/}

        <Route path="/" element={<Outlet />}>
          <Route path={companies} element={<StocksList />}></Route>
          <Route path={`${companies}/:companyId`} element={<Company />} />
          <Route path={about} element={<About />} />
          <Route
            path="*"
            element={<NoMatch />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
