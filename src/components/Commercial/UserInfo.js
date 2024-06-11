import React from "react";
import { Formik, Form, Field } from "formik";
import { Container, Row, Col, FormGroup, Label, Input as ReactstrapInput } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const regions = [
  { name: "Adamaoua", cities: ["Ngaoundéré", "Tibati", "Meiganga", "Banyo", "Belel", "Djohong", "Nganha", "Ngoui", "Mayo-Baléo"] },
  { name: "Centre", cities: ["Yaoundé", "Mbalmayo", "Mfou", "Nanga Eboko", "Monatélé", "Obala", "Ayos", "Sa’a", "Lobo"] },
  { name: "East", cities: ["Bertoua", "Batouri", "Abong-Mbang", "Yokadouma", "Doumé", "Lomié", "Ndelele", "Dimako", "Nguelemendouka", "Mindourou", "Atok", "Mboma"] },
  { name: "Far North", cities: ["Maroua", "Mokolo", "Kaélé", "Kousséri", "Maga", "Mora", "Waza", "Tokombéré", "Maltam", "Kolofata", "Zina", "Amchidé", "Wouro-Dole", "Zémio", "Goulfey", "Goulfey", "Dabanga", "Makary", "Mémé"] },
  { name: "Littoral", cities: ["Douala", "Kribi", "Edéa", "Limbé", "Nkongsamba", "Yabassi", "Bonabéri", "Manjo", "Douala-Bonabéri", "Dibombari", "Edea", "Makènè", "Nkondjock", "Njombe-Penja"] },
  { name: "North", cities: ["Garoua", "Guider", "Tcholliré", "Pitoa", "Rey-Bouba", "Poli", "Lagdo", "Mayo-Oulo", "Mayo-Darlé"] },
  { name: "Northwest", cities: ["Bamenda", "Ndop", "Fundong", "Bafut", "Bambili", "Bali", "Kumbo", "Wum", "Santa", "Tubah", "Batibo", "Nkambe"] },
  { name: "South", cities: ["Ebolowa", "Sangmélima", "Ambam", "Lolodorf", "Kribi", "Djoum", "Bipindi", "Mvangan", "Akom II", "Meyomessala", "Zoétélé", "Ngatto", "Mengang"] },
  { name: "Southwest", cities: ["Buea", "Limbe", "Kumba", "Mamfe", "Mutengene", "Tiko", "Muyuka", "Ekondo-Titi", "Batoke", "Bombele", "Idenao", "Bangem", "Dikome-Balue"] },
  { name: "West", cities: ["Bafoussam", "Bafang", "Dschang", "Mbouda", "Foumban", "Bangangté", "Tonga","Batie", "Bandjoun", "Baham", "Kékem", "Babadjou", "Fokoué", "Penka-Michel"] },
];

const FormComponent = () => {
  return (
    <div className="max-w-6xl mt-4 bg-yellow-50 shadow-md rounded-lg p-4 mx-auto md:p-8 pt-50 ">
      <Container className="form-container">
        <h2 className="text-2xl font-semibold text-gray-800">Project Details</h2>
        <Formik
          initialValues={{
            natureOfProject: "",
            eneoPresence: "",
            eneoConnection: "",
            projectDetails: "",
            fundingSource: "",
            fundingOrgName: "",
            region: "",
            city: ""
          }}
          onSubmit={(values) => {
            axios.post('http://192.168.1.23:8001/api/commercial/post', values)
              .then(response => {
                console.log(response.data);
                
        alert("Email sent successfully!");
              })
              .catch(error => {
                console.error(error);
                alert("Error sending email. Please try again later.");
              });
          }}
        >
          {({ values }) => (
            <Form>
              <Row className="mb-4">
                <Col md={6}>
                  <FormGroup>
                    <Label for="natureOfProject" className="text-gray-700">Nature of Project</Label>
                    <Field as="select" name="natureOfProject" className="form-select mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50">
                      <option value="">Select</option>
                      <option value="office">Office</option>
                      <option value="school">School</option>
                      <option value="hotel">Hotel</option>
                      <option value="farm">Farm</option>
                    </Field>
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="eneoPresence" className="text-gray-700">Eneo Presence</Label>
                    <Field as="select" name="eneoPresence" className="form-select mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50">
                      <option value="">Select</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </Field>
                  </FormGroup>
                </Col>
              </Row>
              <Row className="mb-4">
                <Col md={6}>
                  <FormGroup>
                    <Label for="eneoConnection" className="text-gray-700">Eneo Connection</Label>
                    <Field as="select" name="eneoConnection" className="form-select mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50">
                      <option value="">Select</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </Field>
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="projectDetails" className="text-gray-700">Project Details</Label>
                    <Field as={ReactstrapInput} type="textarea" name="projectDetails" id="projectDetails" className="form-textarea mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50" />
                  </FormGroup>
                </Col>
              </Row>
              <Row className="mb-4">
                <Col md={6}>
                  <FormGroup>
                    <Label for="fundingSource" className="text-gray-700">Funding Source</Label>
                    <Field as="select" name="fundingSource" className="form-select mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50">
                      <option value="">Select</option>
                      <option value="government">Government</option>
                      <option value="private">Private</option>
                      <option value="company">Company</option>
                    </Field>
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="fundingOrgName" className="text-gray-700">Funding Organization Name</Label>
                    <Field as={ReactstrapInput} type="text" name="fundingOrgName" id="fundingOrgName" className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50" />
                  </FormGroup>
                </Col>
              </Row>
              <Row className="mb-4">
                <Col md={6}>
                  <FormGroup>
                    <Label for="region" className="text-gray-700">Region of Implementation</Label>
                    <Field as="select" name="region" className="form-select mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50">
                      <option value="">Select</option>
                      {regions.map((region, index) => (
                        <option key={index} value={region.name}>
                          {region.name}
                        </option>
                      ))}
                    </Field>
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="city" className="text-gray-700">City</Label>
                    <Field as="select" name="city" className="form-select mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50">
                      <option value="">Select</option>
                      {values.region &&
                        regions.find((r) => r.name === values.region)?.cities.map((city, index) => (
                          <option key={index} value={city}>
                            {city}
                          </option>
                        ))}
                    </Field>
                  </FormGroup>
                </Col>
              </Row>
              <button type="submit" className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">Submit</button>
            </Form>
          )}
        </Formik>
      </Container>
    </div>
  );
};

export default FormComponent;
