#include<stdio.h>
#include<stdlib.h>
#define MAX 5
char cq[MAX];
int front=-1,rear=-1;
void insert(char);
void delete();
void display();
int main()
{
    int ch;
    char item;
    while(1)
    {
        printf("\n\n Main Menu");
        printf("\n 1.Insertion and Overflow");
        printf("\n 2.Deletion and Underflow");
        printf("\n 3.Display");
        printf("\n 4.Exit");
        printf("\nEnter your choice: ");
        scanf("%d",&ch);
        getchar(); // Clear newline from input buffer
        switch(ch)
        {
            case 1: printf("Enter the element to be inserted: ");
                    scanf("%c",&item);
                    insert(item);
                    break;
            case 2: delete();
                    break;
            case 3: display();
                    break;
            case 4: exit(0);
            default: printf("Please enter a valid choice\n");
        }
    }
    return 0;
}
void insert(char item)
{
    if(front==(rear+1)%MAX)
    {
        printf("Circular queue overflow\n");
    }
    else
    {
        if(front==-1)
            front=0;
        rear=(rear+1)%MAX;
        cq[rear]=item;
    }
}
void delete()
{
    char item;
    if(front==-1)
    {
        printf("Circular queue underflow\n");
    }
    else
    {
        item=cq[front];
        printf("Deleted element from the queue is: %c\n",item);
        if(front==rear)
            front=rear=-1;
        else
            front=(front+1)%MAX;
    }
}
void display()
{
    int i;
    if(front==-1)
    {
        printf("Circular queue is empty\n");
    }
    else
    {
        printf("Circular queue contents are: ");
        i=front;
        while(1)
        {
            printf("%c ",cq[i]);
            if(i==rear)
                break;
            i=(i+1)%MAX;
        }
        printf("\n");
    }
}
