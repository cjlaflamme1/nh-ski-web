import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Link as RouterLink } from "react-router-dom";

export default function PrivacyPolicy() {
  return (
    <Box sx={{ py: { xs: 8, md: 10 }, bgcolor: "background.default" }}>
      <Container maxWidth="md">
        <Link
          component={RouterLink}
          to="/"
          underline="hover"
          sx={{ display: "inline-block", mb: 4 }}
        >
          &larr; Back to Home
        </Link>

        <Typography variant="h3" gutterBottom>
          Privacy Policy
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Last updated: February 12, 2026
        </Typography>

        <Typography variant="h5" sx={{ mt: 4, mb: 1 }}>
          Introduction
        </Typography>
        <Typography paragraph>
          Red Beard Technologies LLC ("we", "us", or "our") operates the NH Ski Map mobile application.
          This Privacy Policy explains what information we collect, how we use
          it, and your rights regarding that information.
        </Typography>

        <Typography variant="h5" sx={{ mt: 3, mb: 1 }}>
          Information We Collect
        </Typography>
        <Typography paragraph>
          When you create an account or use our app, we may collect the
          following information:
        </Typography>
        <Box component="ul" sx={{ pl: 3, mb: 2 }}>
          <li>
            <Typography>
              Account information (e.g., email address) used for authentication
            </Typography>
          </li>
          <li>
            <Typography>
              App usage data such as favorited routes and saved preferences
            </Typography>
          </li>
        </Box>

        <Typography variant="h5" sx={{ mt: 3, mb: 1 }}>
          How We Use Your Information
        </Typography>
        <Typography paragraph>
          All information we collect is stored securely in a database and is
          used <strong>solely for the purposes of operating and improving the
          app</strong>. This includes providing your saved routes, syncing your
          preferences, and maintaining your account.
        </Typography>

        <Typography variant="h5" sx={{ mt: 3, mb: 1 }}>
          We Never Sell Your Data
        </Typography>
        <Typography
          paragraph
          sx={{ fontWeight: 600, color: "primary.main" }}
        >
          Your personal information is never sold, rented, or shared with third
          parties for marketing or advertising purposes. Period.
        </Typography>

        <Typography variant="h5" sx={{ mt: 3, mb: 1 }}>
          Data Security
        </Typography>
        <Typography paragraph>
          We take the security of your data seriously. Your information is
          stored in a secure database with appropriate technical safeguards in
          place. While no method of electronic storage is 100% secure, we
          strive to use commercially acceptable means to protect your
          information.
        </Typography>

        <Typography variant="h5" sx={{ mt: 3, mb: 1 }}>
          Data Retention
        </Typography>
        <Typography paragraph>
          We retain your information only for as long as your account is active
          or as needed to provide you with our services. If you wish to delete
          your account and associated data, please contact us.
        </Typography>

        <Typography variant="h5" sx={{ mt: 3, mb: 1 }}>
          Children's Privacy
        </Typography>
        <Typography paragraph>
          Our app is not directed at children under the age of 13, and we do
          not knowingly collect personal information from children under 13. If
          you believe we have inadvertently collected such information, please
          contact us so we can promptly remove it.
        </Typography>

        <Typography variant="h5" sx={{ mt: 3, mb: 1 }}>
          Changes to This Policy
        </Typography>
        <Typography paragraph>
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page with an updated revision date. We encourage
          you to review this policy periodically.
        </Typography>

        <Typography variant="h5" sx={{ mt: 3, mb: 1 }}>
          Contact Us
        </Typography>
        <Typography paragraph>
          If you have any questions about this Privacy Policy, please contact
          us at{" "}
          <Link href="mailto:chad@redbeardtechnologies.com">
            chad@redbeardtechnologies.com
          </Link>
          .
        </Typography>
      </Container>
    </Box>
  );
}
