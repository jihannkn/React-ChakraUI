import { Box } from '@chakra-ui/react';
import { SummarySection, SummaryCard } from '../../components/elements/SummaryCard';
import TransactionTable from '../../components/elements/TransactionTable';

export default function Dashboard() {
    return (
       <>
           <Box p={10} bg="#f5f5f5">
               {/* Add the SummarySection and nest SummaryCard components inside */}
               <SummarySection>
                   <SummaryCard
                       title="Total Balance"
                       amount="$12.36K"
                       percentage="15.6%"
                       bgColor="#fddd6e"
                       iconColor="green.500"
                   />
                   <SummaryCard
                       title="Income"
                       amount="$12.36K"
                       percentage="15.6%"
                       bgColor="#fca06d"
                       iconColor="green.500"
                   />
                   <SummaryCard
                       title="Outcome"
                       amount="$12.36K"
                       percentage="15.6%"
                       bgColor="#6d7cfb"
                       iconColor="green.500"
                       textColor="white"   // Set text color to white for Outcome card
                   />
               </SummarySection>

               {/* Transaction table */}
               <TransactionTable />
           </Box>     
       </>
    );
}
