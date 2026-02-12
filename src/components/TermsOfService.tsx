import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Link as RouterLink } from "react-router-dom";

export default function TermsOfService() {
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
          Terms of Service
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Last updated: February 12, 2026
        </Typography>

        <Typography variant="h5" sx={{ mt: 4, mb: 1 }}>
          Acceptance of Terms
        </Typography>
        <Typography paragraph>
          By downloading, installing, or using the NH Ski Map mobile application
          ("the App"), you agree to be bound by these Terms of Service. If you
          do not agree to these terms, do not use the App.
        </Typography>

        <Typography variant="h5" sx={{ mt: 3, mb: 1 }}>
          Description of Service
        </Typography>
        <Typography paragraph>
          NH Ski is an informational guidebook application that provides
          locations and descriptions of backcountry ski routes in New Hampshire.
          The App is intended to show you <strong>where</strong> skiing routes
          exist — it is <strong>not</strong> intended to advise you on whether
          you should ski any particular route.
        </Typography>

        <Typography variant="h5" sx={{ mt: 3, mb: 1 }}>
          Assumption of Risk
        </Typography>
        <Typography
          paragraph
          sx={{ fontWeight: 600, color: "primary.main" }}
        >
          Backcountry skiing is an inherently dangerous activity. By using this
          App, you acknowledge and accept that you assume all risks associated
          with backcountry skiing, including but not limited to avalanches,
          falls, changing weather conditions, equipment failure, and injury or
          death.
        </Typography>
        <Typography paragraph>
          You are solely responsible for evaluating trail conditions, your own
          skill level, weather, avalanche danger, and any other factors
          relevant to your safety before undertaking any route. The App does
          not provide real-time conditions, safety assessments, or
          recommendations on whether any route is safe to ski.
        </Typography>

        <Typography variant="h5" sx={{ mt: 3, mb: 1 }}>
          Accuracy of Information
        </Typography>
        <Typography paragraph>
          While we strive to provide accurate and up-to-date route information,
          we make <strong>no guarantees</strong> regarding the accuracy,
          completeness, or reliability of any content in the App. Route
          descriptions, maps, coordinates, and other details may contain errors
          or may become outdated. Trail conditions, access points, and terrain
          can change at any time without notice.
        </Typography>

        <Typography variant="h5" sx={{ mt: 3, mb: 1 }}>
          Disclaimer of Warranties
        </Typography>
        <Typography paragraph>
          The App and all content are provided on an{" "}
          <strong>"as-is" and "as-available"</strong> basis without warranties
          of any kind, either express or implied, including but not limited to
          implied warranties of merchantability, fitness for a particular
          purpose, and non-infringement. We do not warrant that the App will be
          uninterrupted, error-free, or free of harmful components.
        </Typography>

        <Typography variant="h5" sx={{ mt: 3, mb: 1 }}>
          Limitation of Liability
        </Typography>
        <Typography paragraph>
          To the fullest extent permitted by applicable law, Red Beard
          Technologies LLC and its owner, operators, and contributors shall
          not be liable for any
          direct, indirect, incidental, special, consequential, or punitive
          damages arising out of or related to your use of the App, including
          but not limited to personal injury, property damage, or death,
          regardless of the cause of action or the theory of liability, even if
          we have been advised of the possibility of such damages.
        </Typography>

        <Typography variant="h5" sx={{ mt: 3, mb: 1 }}>
          Intellectual Property
        </Typography>
        <Typography paragraph>
          All content, design, graphics, and other intellectual property in the
          App are owned by Red Beard Technologies LLC or its licensors. You may not reproduce,
          distribute, or create derivative works from this content without
          prior written permission.
        </Typography>

        <Typography variant="h5" sx={{ mt: 3, mb: 1 }}>
          Acceptable Use
        </Typography>
        <Typography paragraph>
          You agree to use the App only for lawful purposes and in accordance
          with these Terms. You agree not to misuse the App or attempt to
          access it through unauthorized means.
        </Typography>

        <Typography variant="h5" sx={{ mt: 3, mb: 1 }}>
          Termination
        </Typography>
        <Typography paragraph>
          We reserve the right to suspend or terminate your access to the App
          at any time, for any reason, without prior notice.
        </Typography>

        <Typography variant="h5" sx={{ mt: 3, mb: 1 }}>
          Changes to These Terms
        </Typography>
        <Typography paragraph>
          We may update these Terms of Service from time to time. Continued use
          of the App after changes are posted constitutes your acceptance of
          the revised terms.
        </Typography>

        <Typography variant="h5" sx={{ mt: 3, mb: 1 }}>
          Governing Law
        </Typography>
        <Typography paragraph>
          These Terms shall be governed by and construed in accordance with the
          laws of the State of New Hampshire, without regard to its conflict of
          law provisions.
        </Typography>

        <Typography variant="h5" sx={{ mt: 3, mb: 1 }}>
          Contact Us
        </Typography>
        <Typography paragraph>
          If you have any questions about these Terms of Service, please
          contact us at{" "}
          <Link href="mailto:chad@redbeardtechnologies.com">
            chad@redbeardtechnologies.com
          </Link>
          .
        </Typography>
      </Container>
    </Box>
  );
}
