import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../global/Layout';
import Header from '../components/Header/Header';
import { Heading1, TextStyle1 } from '../components/Typography/Typography';

const Page = styled.div`
  width: 100%;
  max-width: ${(props) => props.theme.size.inner};
  padding: 0 20px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Section = styled.section`
    padding: 50px 0;
    width: 100%;
`;

const Image = styled.div`
    max-width: 5000px;
    margin: 20px 0;
`;

const IndexPage = ({ data }) => (
    <Layout>
        <Page>
            <Header />
            <Section>
                <Heading1 tag="h1">This is Heading1 with H1 tag</Heading1>
                <TextStyle1 color="#fff" bg="#744c9d">This is TextStyle1 with p tag</TextStyle1>
                <Image>
                    <Img fluid={data.pictureOne.childImageSharp.fluid} />
                </Image>
                <Img fixed={data.pictureTwo.childImageSharp.fixed} />
            </Section>
        </Page>
    </Layout>
);

export const query = graphql`
    query {
        pictureOne: file(relativePath: { eq: "assets/images/02f9a9b7afca1357e123b52c03e9af9dfe8b6b5c.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 500, quality: 100) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        pictureTwo: file(relativePath: { eq: "assets/images/2be63259fd99371209fcb618560b0ba384168b6d.jpg" }) {
            childImageSharp {
                fixed(width: 500, quality: 100) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
    }
`;

export default IndexPage;
