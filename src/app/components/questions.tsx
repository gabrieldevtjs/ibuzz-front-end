import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  
  export default function Questions() {
    return (
      <>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>What payment methods are accepted?</AccordionTrigger>
            <AccordionContent>
              We accept credit cards, bank slips, and Pix. We offer up to 12x installments without interest.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Are the products original and do they come with a warranty?</AccordionTrigger>
            <AccordionContent>
              Yes, all products are 100% original and come with Apple's official warranty.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>What is the delivery time for products?</AccordionTrigger>
            <AccordionContent>
              The delivery time varies by region, but it generally takes between 3 to 7 business days.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Can I exchange or return a product?</AccordionTrigger>
            <AccordionContent>
              Yes, we accept exchanges and returns within 7 days of receipt, as long as the product is sealed.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>Are the iPhones unlocked?</AccordionTrigger>
            <AccordionContent>
              Yes, all iPhones sold are unlocked and compatible with any carrier in Brazil.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </>
    );
  }