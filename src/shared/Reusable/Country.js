import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, message, Select, Row, Col, Alert } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { Country, State, City } from "country-state-city";
// import { SetStudentInfo } from "../../../../../redux/reducer/StudentRegister/StudentReg.actions";

const { Option } = Select;
const Countries = Country.getAllCountries();
const States = State.getAllStates();
const Cities = City.getAllCities();

export default (props) => {
  const studentInfo = useSelector((state) => state.studentInfo);
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [collegesList, setCollegesList] = useState(props.collegesList);
  const [collegesSelectedList, setCollegesSelectedList] = useState(
    studentInfo
      ? studentInfo.institutesList
        ? studentInfo.institutesList
        : []
      : []
  );
  const [selectedCountry, setSelectedCountry] = useState(
    studentInfo ? studentInfo.country : null
  );
  const [selectedState, setSelectedState] = useState(
    studentInfo ? studentInfo.state : null
  );
  const [selectedCity, setSelectedCity] = useState(
    studentInfo ? studentInfo.city : null
  );
  const [filteredState, setFilteredState] = useState(States);
  const [filteredCity, setFilteredCity] = useState(Cities);
  const [warning, setWarning] = useState();
  let count = 1;
  let checkDuplicateSelect = false;

  const handleSubmit = () => {
    let formData = {
      country: selectedCountry ? selectedCountry : "",
      state: selectedState ? selectedState : "",
      city: selectedCity ? selectedCity : "",
      institutesList: collegesSelectedList ? collegesSelectedList : [],
    };
    setError("");
    setLoading(true);

    console.log("formData: ", formData);
    // dispatch(SetStudentInfo(formData));
    props.nextPage(true);
  };

  const handleRemoveList = (college) => {
    setCollegesSelectedList(collegesSelectedList.filter((c) => c !== college));
  };

  useEffect(() => {
    const defaultState = {
      name: "--select--",
    };
    setFilteredState([defaultState, ...filteredState]);
    setFilteredCity([defaultState, ...filteredCity]);
  }, []);

  return (
    <div className="form-width">
      <Form
        form={form}
        onFinish={handleSubmit}
        layout="vertical"
        className="content"
      >
        <h3 style={{ textAlign: "center", fontWeight: "lighter" }}>
          Step 1 of 2
        </h3>
        <Row>
          <Col span={11}>
            <h3>I want to go to</h3>
          </Col>
          <Col span={2}></Col>
          <Col span={11}>
            <h3>
              I want to study at the <br />
              following universities &#38; colleges
            </h3>
          </Col>
        </Row>
        <Row>
          <Col span={11} style={{ marginTop: "3%" }}>
            <Form.Item
              name="cntry"
              label="Country"
              initialValue={studentInfo ? studentInfo.country : null}
              rules={[
                {
                  required: true,
                  message: "Please choose the country you wanted to go.",
                },
              ]}
            >
              <Select
                showSearch
                placeholder="Select country"
                loading={loading}
                onChange={(code) => {
                  setSelectedCountry(Countries[code].name);
                  setFilteredState(
                    States.filter(
                      (state) => state.countryCode === Countries[code].isoCode
                    )
                  );
                }}
                optionFilterProp="children"
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
              >
                {Object.keys(Countries).map((code) => (
                  <Option value={code}>{Countries[code].name}</Option>
                ))}
              </Select>
            </Form.Item>

            <Form.Item
              name="prvc"
              label="Province"
              initialValue={
                studentInfo
                  ? studentInfo.state
                    ? studentInfo.state
                    : null
                  : null
              }
            >
              <Select
                showSearch
                loading={loading}
                placeholder="Select Province"
                onChange={(code) => {
                  setSelectedState(States[code].name);
                  setFilteredCity(
                    Cities.filter(
                      (city) =>
                        city.countryCode === filteredState[code].countryCode &&
                        city.stateCode === filteredState[code].isoCode
                    )
                  );
                }}
                optionFilterProp="children"
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
              >
                {Object.keys(filteredState).map((state) => (
                  <Option value={state}>{filteredState[state].name}</Option>
                ))}
              </Select>
            </Form.Item>

            <Form.Item
              name="cty"
              label="City"
              initialValue={
                studentInfo
                  ? studentInfo.city
                    ? studentInfo.city
                    : null
                  : null
              }
            >
              <Select
                showSearch
                loading={loading}
                placeholder="Select City"
                onChange={(code) => {
                  setSelectedCity(Cities[code].name);
                }}
                optionFilterProp="children"
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
              >
                {Object.keys(filteredCity).map((city) => (
                  <Option value={city}>{filteredCity[city].name}</Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
          <div
            style={{ border: "1px solid #a8f0d9", margin: "2% 2% 2% 2%" }}
          ></div>
          <Col span={11} style={{ marginTop: "3%" }}>
            <Form.Item name="insts" label="Type institute name here">
              <Select
                showSearch
                loading={loading}
                placeholder="Select Colleges"
                onChange={(college) => {
                  checkDuplicateSelect = collegesSelectedList.some(
                    (c) => c === collegesList[college].name
                  );
                  if (!checkDuplicateSelect && count <= 10) {
                    setCollegesSelectedList([
                      ...collegesSelectedList,
                      collegesList[college].name,
                    ]);
                  } else if (!checkDuplicateSelect && count > 10) {
                    setWarning("Max no.of institues[10] list exceeded.");
                  } else if (checkDuplicateSelect) {
                    setWarning("Already this institute selected.");
                  }
                }}
                optionFilterProp="children"
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
              >
                {Object.keys(collegesList).map((college) => (
                  <Option value={college}>{collegesList[college].name}</Option>
                ))}
              </Select>
            </Form.Item>
            {warning && <Alert message={warning} type="warning" showIcon />}
            <label>List of institutes selected</label>
            <div
              style={{
                border: "1px solid #b3e2d2",
                height: "19vh",
                overflowY: "auto",
              }}
            >
              <Form.Item>
                {collegesSelectedList.map((college) => (
                  <ul style={{ listStyleType: "none", padding: "0px" }}>
                    <li key={college}>
                      {count++}.{college}
                      <Button
                        size="small"
                        onClick={() => handleRemoveList(college)}
                        icon={<DeleteOutlined />}
                        danger
                      />
                    </li>
                  </ul>
                ))}
              </Form.Item>
            </div>
          </Col>
        </Row>
        <Form.Item style={{ textAlign: "center", marginTop: "2%" }}>
          <Button
            htmlType="submit"
            type="primary"
            loading={loading}
            disabled={loading}
          >
            Next
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
