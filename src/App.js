import React, { useState } from "react";
import "./App.css";

import useInterval from "use-interval";

import UserAction from "./components/Pages/Forms/Testing/UserAction";

//Components
import Home from "./components/Home/Home";
import Login from "./shared/Login/Login";
import Loading from "./shared/Loading/Loading";
import Table from "./shared/Table";

import Search from "./components/Pages/Search/Search";

// Leads Routes
import LeadEntry from "./components/Pages/Forms/Leads/LeadEntry";
import TodayFollowups from "./components/Pages/Forms/Leads/TodayFollow";
import Unfollows from "./components/Pages/Forms/Leads/Unfollow";
import FollowupList from "./components/Pages/Forms/Leads/FollowList";
import LeadsReport from "./components/Pages/Forms/Leads/LeadReport";
import CategoryWiseLeads from "./components/Pages/Forms/Leads/CategoryLead";
import SoftwareWiseLeads from "./components/Pages/Forms/Leads/SoftwareLead";
import AreaWiseLead from "./components/Pages/Forms/Leads/AreaLead";
import CountryWiseLeads from "./components/Pages/Forms/Leads/CountryLead";
import RatioWiseLeads from "./components/Pages/Forms/Leads/RadioLead";
import ReferenceWiseLeads from "./components/Pages/Forms/Leads/ReferenceLead";
import DealerWiseLeads from "./components/Pages/Forms/Leads/DealerLead";
import SourceWiseLeads from "./components/Pages/Forms/Leads/SourceLead";
import LeadSummary from "./components/Pages/Forms/Leads/LeadSummery";

// Installation Routes

import InstallationEntry from "./components/Pages/Forms/Installation/InstallEntry";
import DemoInstallation from "./components/Pages/Forms/Installation/DemoInstall";
import ReInstallationEntry from "./components/Pages/Forms/Installation/ReInstall";
import InstallationReport from "./components/Pages/Forms/Installation/InstallReport";
import InstallationsSummary from "./components/Pages/Forms/Installation/InstallSummary";
import DemoInstallationReport from "./components/Pages/Forms/Installation/DemoInstallReport";
import InstallationHistory from "./components/Pages/Forms/Installation/InstallHistory";

// Services Routes

import ServiceEntry from "./components/Pages/Forms/Services/ServiceEntry";
import TrackService from "./components/Pages/Forms/Services/TrackService";
import UnclearedServices from "./components/Pages/Forms/Services/UnclearService";
import ServiceList from "./components/Pages/Forms/Services/ServiceList";
import ServicesSummary from "./components/Pages/Forms/Services/ServiceSummary";
import CategoryWiseService from "./components/Pages/Forms/Services/CategoryService";
import SoftwareWiseService from "./components/Pages/Forms/Services/SoftwareService";

// Dealer Routes

import DealerRegistration from "./components/Pages/Forms/Dealer/DealerRegister";
import DealersList from "./components/Pages/Forms/Dealer/DealerList";
import AreaWiseDealersList from "./components/Pages/Forms/Dealer/AreaDealerList";
import CountryWiseDealersList from "./components/Pages/Forms/Dealer/CountryDealerList";
import DealersSummary from "./components/Pages/Forms/Dealer/DealerSummary";
import InactiveDealers from "./components/Pages/Forms/Dealer/InactiveDealer";

// Customer Routes

import CustomerRegistration from "./components/Pages/Forms/Customer/CustomerRegister";
import CustomerReceiptEntry from "./components/Pages/Forms/Customer/CustomerReceipt";
import CustomerSearch from "./components/Pages/Forms/Customer/CusSearch";
import DuesReport from "./components/Pages/Forms/Customer/DuesReport";
import OverduesReport from "./components/Pages/Forms/Customer/OverDuesReport";
import CustomerAccountsStatement from "./components/Pages/Forms/Customer/CusAccountStatement";
import CustomersList from "./components/Pages/Forms/Customer/CustomerList";
import AreaWiseCustomersList from "./components/Pages/Forms/Customer/AreaCusList";
import CountryWiseCustomersList from "./components/Pages/Forms/Customer/CountryCusList";
import CustomersSummary from "./components/Pages/Forms/Customer/CustomerSummary";

// Accounts Routes

import VoucherEntry from "./components/Pages/Forms/Accounts/VoucherEntry";
import VoucherEntryEdit from "./components/Pages/Forms/Accounts/VoucherEntry/Edit";
import VoucherEntryCreate from "./components/Pages/Forms/Accounts/VoucherEntry/Create";

// Users Routes

import UsersManagement from "./components/Pages/Forms/Users/UserMangement";
import UserPermissions from "./components/Pages/Forms/Users/UserPermission";
import ChangePassword from "./components/Pages/Forms/Users/ChangePassword";

// SMS Routes

import SMSSetting from "./components/Pages/Forms/SMS/SMSSetting";
import WhatsappSetting from "./components/Pages/Forms/SMS/WhatAppSetting";

// Setting Routes

import CompanySetting from "./components/Pages/Forms/Setting/CompanySetting";

// Registration Routes Forms
import ResellerRegistrationForm from "./components/Pages/Forms/Registration/resellerReg";

// Registration Routes Tables
import ResellerRegistrationTable from "./components/Pages/Tables/Table/Registration/resellerReg";

// Components
// Scheme

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);

  useInterval(() => {
    setIsLoading(true);
  }, 100);

  return (
    <div className="App">
      {!isLoading ? (
        <Loading />
      ) : (
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/table" element={<Table />} />
            <Route path="/search-lists" element={<Search />} />

            {/* Leads Routers */}
            <Route path="/leadEntry" element={<LeadEntry />} />
            <Route path="/todayFollow" element={<TodayFollowups />} />
            <Route path="/unFollow" element={<Unfollows />} />
            <Route path="/followList" element={<FollowupList />} />
            <Route path="/leadReport" element={<LeadsReport />} />
            <Route path="/category-wise-lead" element={<CategoryWiseLeads />} />
            <Route path="/software-wise-lead" element={<SoftwareWiseLeads />} />
            <Route path="/area-wise-lead" element={<AreaWiseLead />} />
            <Route path="/country-wise-lead" element={<CountryWiseLeads />} />
            <Route path="/radio-wise-lead" element={<RatioWiseLeads />} />
            <Route
              path="/reference-wise-lead"
              element={<ReferenceWiseLeads />}
            />
            <Route path="/dealer-wise-lead" element={<DealerWiseLeads />} />
            <Route path="/source-wise-lead" element={<SourceWiseLeads />} />
            <Route path="/leadSummery" element={<LeadSummary />} />

            {/* Installation Routers */}
            <Route path="/installationEntry" element={<InstallationEntry />} />
            <Route path="/demoInstallation" element={<DemoInstallation />} />
            <Route
              path="/reInstallationEntry"
              element={<ReInstallationEntry />}
            />
            <Route
              path="/installationReport"
              element={<InstallationReport />}
            />
            <Route
              path="/installationSummary"
              element={<InstallationsSummary />}
            />
            <Route
              path="/demoInstallationReport"
              element={<DemoInstallationReport />}
            />
            <Route
              path="/installationHistory"
              element={<InstallationHistory />}
            />

            {/* Services Routers */}
            <Route path="/serviceEntry" element={<ServiceEntry />} />
            <Route path="/trackService" element={<TrackService />} />
            <Route path="/undeclaredService" element={<UnclearedServices />} />
            <Route path="/serviceList" element={<ServiceList />} />
            <Route path="/serviceSummary" element={<ServicesSummary />} />
            <Route
              path="/category-wise-service"
              element={<CategoryWiseService />}
            />
            <Route
              path="/software-wise-servie"
              element={<SoftwareWiseService />}
            />

            {/* Dealer Routers */}
            <Route
              path="/dealer-registeration"
              element={<DealerRegistration />}
            />
            <Route path="/dealer-list" element={<DealersList />} />
            <Route
              path="/area-wise-dealer-list"
              element={<AreaWiseDealersList />}
            />
            <Route
              path="/country-wise-dealer-list"
              element={<CountryWiseDealersList />}
            />
            <Route path="/dealerSummary" element={<DealersSummary />} />
            <Route path="/inactiveDealer" element={<InactiveDealers />} />

            {/* Customer Routers */}

            <Route
              path="/customer-registration"
              element={<CustomerRegistration />}
            />
            <Route
              path="/customer-receipt-entry"
              element={<CustomerReceiptEntry />}
            />
            <Route path="/customer-search" element={<CustomerSearch />} />
            <Route path="/dues-report" element={<DuesReport />} />
            <Route path="/overdues-report" element={<OverduesReport />} />
            <Route
              path="/customer-account-statement"
              element={<CustomerAccountsStatement />}
            />
            <Route path="/customer-list" element={<CustomersList />} />
            <Route
              path="/area-wise-customer-list"
              element={<AreaWiseCustomersList />}
            />
            <Route
              path="/country-wise-customer-list"
              element={<CountryWiseCustomersList />}
            />
            <Route path="/customer-summary" element={<CustomersSummary />} />

            {/* Accounts Routers */}

            <Route path="/voucher-entry" element={<VoucherEntry />} />
            {/* <Route path="/voucher-entry-edit" element={<VoucherEntryEdit />} />
            <Route
              path="/voucher-entry-create"
              element={<VoucherEntryCreate />}
            /> */}

            {/* Users Routers */}

            <Route path="/user-management" element={<UsersManagement />} />
            <Route path="/user-permission" element={<UserPermissions />} />
            <Route path="/change-password" element={<ChangePassword />} />

            {/* SMS Routers */}

            <Route path="/sms-setting" element={<SMSSetting />} />
            <Route path="/whatsapp-setting" element={<WhatsappSetting />} />

            {/* Setting Routers */}
            <Route path="/company-setting" element={<CompanySetting />} />

            {/* Registration Forms*/}
            <Route
              path="/reseller-regitration-form"
              element={<ResellerRegistrationForm />}
            />
            {/* Registration Table*/}
            <Route
              path="/reseller-regitration-table"
              element={<ResellerRegistrationTable />}
            />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
};

export default App;
