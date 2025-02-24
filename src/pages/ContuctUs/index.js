import React, { useState } from "react";
import { 
  Box, Heading, Text, FormControl, FormLabel, Input, Textarea, Button, Stack, 
  useToast, Flex, Select 
} from "@chakra-ui/react";
import InputMask from "react-input-mask";
import { useTranslation } from "react-i18next";

const countryPhoneCodes = {
  "Armenia": { code: "+374", maxLength: 8, mask: "+374 99 999999" },
  "USA": { code: "+1", maxLength: 10, mask: "+1 (999) 999-9999" },
  "UK": { code: "+44", maxLength: 10, mask: "+44 9999 999999" },
  "Germany": { code: "+49", maxLength: 10, mask: "+49 999 9999999" },
  "France": { code: "+33", maxLength: 9, mask: "+33 9 99 99 99 99" },
  "India": { code: "+91", maxLength: 10, mask: "+91 9999999999" },
  "China": { code: "+86", maxLength: 11, mask: "+86 999 9999 9999" },
  "Russia": { code: "+7", maxLength: 10, mask: "+7 999 999 9999" },
};

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    country: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isPhoneDisabled, setIsPhoneDisabled] = useState(true); // Состояние для блокировки номера телефона
  const toast = useToast();
  const { t } = useTranslation();

  const getPhoneMask = (country) => {
    const countryData = countryPhoneCodes[country] || {};
    return countryData.mask || "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCountryChange = (e) => {
    const selectedCountry = e.target.value;
    setFormData({
      ...formData,
      country: selectedCountry,
      phone: countryPhoneCodes[selectedCountry]?.code || "",
    });
    setIsPhoneDisabled(selectedCountry === ""); // Если страна не выбрана, блокируем поле телефона
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Имитация асинхронной операции (например, вызов API)
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Задержка 2 секунды

      toast({
        title: "Message Sent",
        description: "Your message has been sent successfully.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setIsSubmitting(false); // Завершаем загрузку после попытки отправки
    }

    setFormData({
      name: "", surname: "", email: "", phone: "", 
      country: "", subject: "", message: ""
    });
  };

  // Перевод для стран
  const translatedCountries = {
    "Armenia": t("contact_us_page.armenia"),
    "USA": t("contact_us_page.usa"),
    "UK": t("contact_us_page.uk"),
    "Germany": t("contact_us_page.germany"),
    "France": t("contact_us_page.france"),
    "India": t("contact_us_page.india"),
    "China": t("contact_us_page.china"),
    "Russia": t("contact_us_page.russia"),
  };

  return (
    <Flex justifyContent="center" alignItems="center" bg="linear-gradient(135deg, white -300%, rgb(111, 19, 203) 40%, white 300%)" py="50px" px={{ base: "10px", md: "50px" }} color="white">
      <Stack direction="column" w="full" mt="20px">
        <Box w="full" textAlign="center" mb="50px">
          <Heading fontFamily="Roboto" fontWeight="600" fontSize={{ base: "40px", md: "50px" }} color="white" textShadow="0 0 0px #fafafa, 0 0 4px #fafafa">
            {t("contact_us")}
          </Heading>
          <Text fontSize={{ base: "md", md: "lg" }} color="gray.400" maxW="800px" mx="auto">
            {t("contact_us_page.title")}
          </Text>
        </Box>

        <Flex justifyContent="center" w="full">
          <Flex justifyContent="center" alignItems="center" w={{ base: "full", md: "700px" }} bgColor="#27272a" borderRadius="20px" boxShadow="lg" p="20px">
            <form onSubmit={handleSubmit} style={{ width: "100%" }}>
              <Stack spacing={4}>
                <Stack direction={{ base: "column", md: "row" }} spacing={4}>
                  <FormControl id="name" isRequired>
                    <FormLabel color="white">{t("contact_us_page.name")}</FormLabel>
                    <Input border="none" type="text" name="name" value={formData.name} onChange={handleChange} bg="gray.700" color="white" placeholder={t("contact_us_page.your_name")} />
                  </FormControl>

                  <FormControl id="surname" isRequired>
                    <FormLabel color="white">{t("contact_us_page.surname")}</FormLabel>
                    <Input border="none"  type="text" name="surname" value={formData.surname} onChange={handleChange} bg="gray.700" color="white" placeholder={t("contact_us_page.surname")} />
                  </FormControl>
                </Stack>

                <Stack direction="row" spacing={4}>
                  <FormControl id="email" isRequired>
                    <FormLabel color="white">{t("contact_us_page.email")}</FormLabel>
                    <Input border="none"  type="email" name="email" value={formData.email} onChange={handleChange} bg="gray.700" color="white" placeholder={t("contact_us_page.your_email")} />
                  </FormControl>
                </Stack>

                <FormControl id="country" isRequired>
                  <FormLabel color="white">{t("contact_us_page.country")}</FormLabel>
                  <Select border="none" name="country" value={formData.country} onChange={handleCountryChange} bg="gray.700" color="white">
                    <option value="" disabled>{t("contact_us_page.select_your_country")}</option>
                    {Object.keys(countryPhoneCodes).map((country) => (
                      <option style={{ backgroundColor: "black" }} key={country} value={country}>
                        {translatedCountries[country] || country}
                      </option>
                    ))}
                  </Select>
                </FormControl>

                <FormControl id="phone" isRequired>
                  <FormLabel color="white">{t("contact_us_page.phone_number")}</FormLabel>
                  <InputMask border="none" mask={getPhoneMask(formData.country)} value={formData.phone} onChange={handleChange} disabled={isPhoneDisabled}>
                    {(inputProps) => <Input {...inputProps} type="tel" name="phone" bg="gray.700" color="white" />}
                  </InputMask>
                </FormControl>

                <FormControl id="subject" isRequired>
                  <FormLabel color="white">{t("contact_us_page.subject")}</FormLabel>
                  <Select border="none" name="subject" value={formData.subject} onChange={handleChange} bg="gray.700" color="white">
                    <option value="" disabled>{t("contact_us_page.select_subject")}</option>
                    <option style={{ backgroundColor: "black" }} value="General Inquiry">{t("contact_us_page.general_inquiry")}</option>
                    <option style={{ backgroundColor: "black" }} value="Support">{t("contact_us_page.support")}</option>
                    <option style={{ backgroundColor: "black" }} value="Business Proposal">{t("contact_us_page.business_proposal")}</option>
                    <option style={{ backgroundColor: "black" }} value="Partnership">{t("contact_us_page.partnership")}</option>
                    <option style={{ backgroundColor: "black" }} value="Other">{t("contact_us_page.other")}</option>
                  </Select>
                </FormControl>

                <FormControl id="message" isRequired>
                  <FormLabel color="white">{t("contact_us_page.message")}</FormLabel>
                  <Textarea border="none" name="message" value={formData.message} onChange={handleChange} bg="gray.700" color="white" placeholder={t("contact_us_page.message")} rows={6} />
                </FormControl>

                <Button type="submit" color="white" isLoading={isSubmitting} loadingText={t("contact_us_page.sending")} bgColor="#4ade80" variant="solid" size="lg" mt="20px">
                  {t("contact_us_page.send_message")}
                </Button>
              </Stack>
            </form>
          </Flex>
        </Flex>
      </Stack>
    </Flex>
  );
};

export default ContactUsPage;
