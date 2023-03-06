import { CssBaseline, ThemeProvider } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import { Contacts } from './scenes/contacts';
import { Dashboard } from "./scenes/dashboard";
import { Sidebar } from './scenes/global/Sidebar';
import { Topbar } from './scenes/global/Topbar';
import { Invoices } from './scenes/invoices';
import { Team } from './scenes/team';
import { ColorModeContext, useMode } from "./theme";
// import { Invoices } from "./invoices";
// import { Contacts } from "./contacts";
// import { Bar } from "./bar";
// import { Form } from "./form";
// import { Line } from "./line";
// import { Pie } from "./pie";
// import { FAQ } from "./faq";
// import { Geography } from "./geography";
// import { Calendar } from "./calendar";

export function App() {
  const {theme, colorMode} = useMode();
  
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <div className='app'>
          <Sidebar/>
          <main className="content">
            <Topbar/>
            <Routes>
              <Route path="/" element={<Dashboard/>} />
              <Route path="/team" element={<Team/>} />
              <Route path="/contacts" element={<Contacts/>} />
              <Route path="/invoices" element={<Invoices/>} />
              {/*<Route path="/form" element={<Form/>} />
              <Route path="/bar" element={<Bar/>} />
              <Route path="/pie" element={<Pie/>} />
              <Route path="/line" element={<Line/>} />
              <Route path="/faq" element={<FAQ/>} />
              <Route path="/geography" element={<Geography/>} />
              <Route path="/calendar" element={<Calendar/>} /> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}